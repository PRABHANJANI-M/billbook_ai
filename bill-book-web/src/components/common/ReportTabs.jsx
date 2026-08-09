import { NavLink } from 'react-router-dom'

export default function ReportTabs({ tabs }) {
  return (
    <div className="flex gap-2 flex-wrap mb-5 bg-white border border-gray-200 rounded-xl p-2">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-xs font-medium ${
              isActive ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  )
}