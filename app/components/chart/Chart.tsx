"use client";
import { useCoinHistory } from "@/app/hooks/useHistory";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const { data, loading, error } = useCoinHistory("bitcoin", 30);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis
          dataKey="timestamp"
          tickFormatter={(ts) => new Date(ts).toLocaleDateString()}
        />
        <YAxis domain={["auto", "auto"]} />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#7c6af7" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
