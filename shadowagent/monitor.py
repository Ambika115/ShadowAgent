# ==============================
# ShadowAgent Monitor
# ==============================

from agents.customer_agent import run as customer
from agents.finance_agent import run as finance
from agents.hr_agent import run as hr
from agents.email_agent import run as email
from agents.research_agent import run as research
from agents.unknown_agent import run as unknown


def load_agents():

    agent_list = [

        customer(),
        finance(),
        hr(),
        email(),
        research(),
        unknown()

    ]

    return agent_list