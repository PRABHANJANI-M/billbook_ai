import { NavLink } from 'react-router-dom'

export default function ReportTabs({ tabs }) {
  return (
    <div className="mb-5 flex flex-wrap gap-2 rounded-xl border border-gray-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end
          className={({ isActive }) =>
            `rounded-lg px-3 py-1.5 text-xs font-medium ${
              isActive ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-100 dark:hover:text-slate-900'
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  )
}