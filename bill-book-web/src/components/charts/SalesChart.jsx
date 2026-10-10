import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

export default function SalesChart({ data }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
      <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-slate-200">📊 Sales — Last 14 Days</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#475569" />
          <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#cbd5e1' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#cbd5e1' }} tickFormatter={(v) => `₹${v / 1000}k`} axisLine={false} tickLine={false} />
          <Tooltip formatter={(v) => [`₹${v}`, 'Sales']} contentStyle={{ backgroundColor: '#020617', border: '1px solid #334155', color: '#f8fafc' }} />
          <Bar dataKey="amount" fill="#818cf8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}