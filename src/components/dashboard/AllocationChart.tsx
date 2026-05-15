"use client";
import { AssetAllocation } from "@/lib/zerodha";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function AllocationChart({ data }: { data: AssetAllocation[] }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[400px] flex flex-col">
      <h3 className="text-lg font-semibold text-zinc-100 mb-4">Sector Allocation</h3>
      <div className="flex-1 w-full h-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: any) => [`${value}%`, 'Allocation']}
              contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px', color: '#f4f4f5' }}
              itemStyle={{ color: '#f4f4f5' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
