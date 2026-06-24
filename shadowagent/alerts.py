# ==============================
# Alert Generator
# ==============================

def generate(agent, alerts):

    if len(alerts) == 0:

        return {

            "agent": agent["agent_name"],

            "message": "No Threats"

        }

    return {

        "agent": agent["agent_name"],

        "message": alerts

    }