import streamlit as st
import pandas as pd

from shadowagent.monitor import load_agents
from shadowagent.trust_engine import calculate_trust
from shadowagent.detector import detect
from shadowagent.alerts import generate

st.set_page_config(
    page_title="ShadowAgent",
    page_icon="🛡️",
    layout="wide"
)

st.title("🛡️ ShadowAgent")
st.subheader("Trust-Based Framework for Detecting Malicious AI Agents")

st.markdown("---")

agents = load_agents()

processed_agents = []

alerts = []

for agent in agents:

    agent = calculate_trust(agent)

    alert = detect(agent)

    alerts.append(generate(agent, alert))

    processed_agents.append(agent)

trusted = 0
warning = 0
malicious = 0

for agent in processed_agents:

    if agent["status"] == "Trusted":
        trusted += 1

    elif agent["status"] == "Warning":
        warning += 1

    else:
        malicious += 1

col1, col2, col3, col4 = st.columns(4)

col1.metric("Running Agents", len(processed_agents))
col2.metric("Trusted", trusted)
col3.metric("Warning", warning)
col4.metric("Blocked", malicious)

st.markdown("---")

table = []

for agent in processed_agents:

    table.append({

        "Agent": agent["agent_name"],

        "Role": agent["role"],

        "Trust Score": agent["trust_score"],

        "Status": agent["status"]

    })

df = pd.DataFrame(table)

st.header("Agent Status")

st.dataframe(df, use_container_width=True)

st.markdown("---")

st.header("Threat Alerts")

for item in alerts:

    if item["message"] == "No Threats":

        st.success(f'{item["agent"]} : No Threats')

    else:

        st.error(item["agent"])

        for msg in item["message"]:

            st.write("•", msg)

st.markdown("---")

st.header("Agent Activities")

for agent in processed_agents:

    with st.expander(agent["agent_name"]):

        st.write("Role :", agent["role"])

        st.write("Trust :", agent["trust_score"])

        st.write("Status :", agent["status"])

        st.write("Actions")

        for action in agent["actions"]:

            st.write("✔", action)