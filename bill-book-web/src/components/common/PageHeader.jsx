export default function PageHeader({ icon: Icon, title, actions }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        {Icon && <Icon size={20} className="text-gray-700" />}
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      </div>
      <div className="flex items-center gap-2">{actions}</div>
    </div>
  )
}