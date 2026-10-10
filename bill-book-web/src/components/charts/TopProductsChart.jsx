import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default function TopProductsChart({ data }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
      <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-slate-200">🍩 Top Products (30d)</h3>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={2}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#020617', border: '1px solid #334155', color: '#f8fafc' }} />
          <Legend wrapperStyle={{ fontSize: 11, color: '#cbd5e1' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}