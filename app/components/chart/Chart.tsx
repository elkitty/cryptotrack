"use client";
import { useCoinHistory } from "@/app/hooks/useHistory";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  defs,
  linearGradient,
  stop,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2">
        <p className="text-gray-400 text-xs">
          {new Date(label).toLocaleDateString()}
        </p>
        <p className="text-white text-sm font-medium">
          ${Number(payload[0].value).toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
};

const Chart = () => {
  const { data, loading, error } = useCoinHistory("bitcoin", 30);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="bg-gray-900 rounded-xl p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-2xl font-semibold">Bitcoin</p>
          <p className="text-sm text-gray-400">BTC</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, left: 15, bottom: 1 }}
        >
          <XAxis
            dataKey="timestamp"
            tickFormatter={(ts) =>
              new Date(ts).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
            interval="preserveStartEnd"
            tick={{ fill: "#6b7280", fontSize: 11 }}
            tickLine={false}
            minTickGap={50}
            axisLine={{ stroke: "#374151" }}
          />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fill: "#6b7280", fontSize: 11 }}
            axisLine={{ stroke: "#4b5563" }}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            width={75}
            padding={{ top: 20, bottom: 20 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7c6af7" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#7c6af7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="basis"
            dataKey="price"
            stroke="#7c6af7"
            strokeWidth={2}
            fill="url(#colorPrice)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
