export default function PageHeader({ icon: Icon, title, actions }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {Icon && <Icon size={20} className="text-gray-700 dark:text-slate-200" />}
        <h1 className="text-xl font-semibold text-gray-800 dark:text-slate-100">{title}</h1>
      </div>
      <div className="flex items-center gap-2">{actions}</div>
    </div>
  )
}