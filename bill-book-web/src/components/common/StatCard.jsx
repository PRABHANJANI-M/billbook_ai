export default function StatCard({ icon: Icon, label, value, linkText, accent = 'gray', onLinkClick }) {
  const accents = {
    gray: 'text-gray-800',
    blue: 'text-blue-600',
    red: 'text-red-500',
    green: 'text-green-600',
  }
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-2 min-w-[180px] flex-1">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{label}</span>
        {Icon && <Icon size={18} className="text-gray-300" />}
      </div>
      <div className={`text-xl font-bold ${accents[accent]}`}>{value}</div>
      {linkText && (
        <button onClick={onLinkClick} className="text-xs text-indigo-600 hover:underline text-left">
          {linkText} →
        </button>
      )}
    </div>
  )
}