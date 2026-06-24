import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

function TrustBarChart({ agents }) {
  const data = agents.map((agent) => ({
    name: agent.agent_name.replace(" Agent", ""),
    trust: agent.trust_score,
  }));

  const colors = [
    "#22c55e", // Customer
    "#f59e0b", // Finance
    "#3b82f6", // HR
    "#06b6d4", // Email
    "#a855f7", // Research
    "#ef4444", // Unknown
  ];

  return (
    <div className="chart-card">
      <h2>Trust Score by Agent</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid stroke="#374151" />

          <XAxis
            dataKey="name"
            stroke="#9ca3af"
          />

          <YAxis
            domain={[0, 100]}
            stroke="#9ca3af"
          />

          <Tooltip />

          <Bar dataKey="trust" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={colors[index]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrustBarChart;