export default function StatCard({ icon: Icon, label, value, linkText, accent = 'gray', onLinkClick }) {
  const accents = {
    gray: 'text-gray-800 dark:text-slate-100',
    blue: 'text-blue-600 dark:text-blue-400',
    red: 'text-red-500 dark:text-red-400',
    green: 'text-green-600 dark:text-green-400',
  }
  return (
    <div className="flex min-w-[180px] flex-1 flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-slate-400">{label}</span>
        {Icon && <Icon size={18} className="text-gray-300 dark:text-slate-500" />}
      </div>
      <div className={`text-xl font-bold ${accents[accent]}`}>{value}</div>
      {linkText && (
        <button onClick={onLinkClick} className="text-left text-xs text-indigo-600 hover:underline dark:text-indigo-400">
          {linkText} →
        </button>
      )}
    </div>
  )
}