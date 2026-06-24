import "../styles/dashboard.css";

function ThreatAlerts({ alerts }) {
  return (
    <div className="table-card">
      <h2>Threat Alerts</h2>

      {alerts.map((alert, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          {alert.message === "No Threats" ? (
            <div className="success-alert">
              <strong>{alert.agent}</strong> : No Threats
            </div>
          ) : (
            <>
              <div className="danger-alert">
                <strong>{alert.agent}</strong>
              </div>

              <ul style={{ marginTop: "10px", marginLeft: "25px" }}>
                {alert.message.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ThreatAlerts;