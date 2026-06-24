import React from "react";
import "../styles/dashboard.css";

function AgentTable({ agents }) {
  return (
    <div className="table-card">
      <h2>Agent Status</h2>

      <table className="agent-table">
        <thead>
          <tr>
            <th>Agent</th>
            <th>Role</th>
            <th>Trust Score</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {agents.map((agent, index) => (
            <tr key={index}>
              <td>{agent.agent_name}</td>
              <td>{agent.role}</td>

              <td>
                <span className="trust-score">
                  {agent.trust_score}
                </span>
              </td>

              <td>
                <span
                  className={
                    agent.status === "Trusted"
                      ? "trusted"
                      : agent.status === "Warning"
                      ? "warning"
                      : "malicious"
                  }
                >
                  {agent.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgentTable;