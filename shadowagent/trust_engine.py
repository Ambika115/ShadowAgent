# ==============================
# Trust Score Engine
# ==============================

def calculate_trust(agent):

    score = 100

    suspicious_words = [

        "password",
        "external",
        "prompt",
        "unauthorized",
        "finance",
        "payroll"

    ]

    for action in agent["actions"]:

        text = action.lower()

        for word in suspicious_words:

            if word in text:

                score -= 20

    if score < 0:
        score = 0

    if score >= 80:
        status = "Trusted"

    elif score >= 50:
        status = "Warning"

    else:
        status = "Malicious"

    agent["trust_score"] = score
    agent["status"] = status

    return agent