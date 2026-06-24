# ==============================
# Threat Detector
# ==============================

def detect(agent):

    alerts = []

    for action in agent["actions"]:

        text = action.lower()

        if "password" in text:
            alerts.append("Password Access Attempt")

        if "external" in text:
            alerts.append("External Communication")

        if "prompt" in text:
            alerts.append("Prompt Injection")

        if "finance" in text:
            alerts.append("Unauthorized Finance Access")

    return alerts