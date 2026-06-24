import TrustBarChart from "../components/TrustBarChart";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AgentTable from "../components/AgentTable";
import ThreatAlerts from "../components/ThreatAlerts";
import LiveChart from "../components/LiveChart";
import api from "../services/api";
import "../styles/dashboard.css";

function Dashboard() {
  const [summary, setSummary] = useState({
    total: 0,
    trusted: 0,
    warning: 0,
    malicious: 0,
  });

  const [agents, setAgents] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Stores graph history
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await api.get("/agents");

        setSummary(res.data.summary);
        setAgents(res.data.agents);
        setAlerts(res.data.alerts);

        // Calculate overall trust score
        const totalTrust =
          res.data.agents.reduce(
            (sum, agent) => sum + agent.trust_score,
            0
          ) / res.data.agents.length;

        const currentTime = new Date().toLocaleTimeString();

        setHistory((prev) => {
          const updated = [
            ...prev,
            {
              time: currentTime,
              trust: Math.round(totalTrust),
            },
          ];

          // Keep only last 20 readings
          if (updated.length > 20) {
            updated.shift();
          }

          return updated;
        });
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    loadData();

    const interval = setInterval(loadData, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-content">

        <div className="dashboard-header">
          <h1>ShadowAgent Dashboard</h1>

          <p>
            Live Trust Monitoring Framework for Detecting Malicious AI Agents
          </p>
        </div>

        {/* Summary Cards */}

        <div className="cards-grid">

          <div className="card">
            <h3>Total Agents</h3>
            <h1>{summary.total}</h1>
          </div>

          <div className="card">
            <h3>Trusted</h3>
            <h1>{summary.trusted}</h1>
          </div>

          <div className="card">
            <h3>Warning</h3>
            <h1>{summary.warning}</h1>
          </div>

          <div className="card">
            <h3>Malicious</h3>
            <h1>{summary.malicious}</h1>
          </div>

        </div>

        {/* Live Graph */}

        <div className="section-space">

          <TrustBarChart agents={agents} />

        </div>

        {/* Agent Table */}

        <div className="section-space">

          <AgentTable agents={agents} />

        </div>

        {/* Threat Alerts */}

        <div className="section-space">

          <ThreatAlerts alerts={alerts} />

        </div>

      </main>
    </div>
  );
}

export default Dashboard;