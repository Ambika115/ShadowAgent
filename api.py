from flask import Flask, jsonify
from flask_cors import CORS

from shadowagent.monitor import load_agents
from shadowagent.trust_engine import calculate_trust
from shadowagent.detector import detect
from shadowagent.alerts import generate

app = Flask(__name__)
CORS(app)


@app.route("/agents", methods=["GET"])
def get_agents():

    agents = load_agents()

    processed_agents = []
    alerts = []

    trusted = 0
    warning = 0
    malicious = 0

    for agent in agents:

        agent = calculate_trust(agent)

        threat = detect(agent)

        alert = generate(agent, threat)

        alerts.append(alert)

        processed_agents.append(agent)

        if agent["status"] == "Trusted":
            trusted += 1
        elif agent["status"] == "Warning":
            warning += 1
        else:
            malicious += 1

    return jsonify({
        "summary": {
            "total": len(processed_agents),
            "trusted": trusted,
            "warning": warning,
            "malicious": malicious
        },
        "agents": processed_agents,
        "alerts": alerts
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)