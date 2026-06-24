import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function LiveChart({ history }) {
  return (
    <div className="table-card">
      <h2>Live Trust Trend</h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={history}>
          <CartesianGrid stroke="#374151" />

          <XAxis dataKey="time" stroke="#9ca3af" />

          <YAxis
            domain={[0, 100]}
            stroke="#9ca3af"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="trust"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={false}
            animationDuration={500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LiveChart;