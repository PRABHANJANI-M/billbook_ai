import { useState } from 'react'
import { Search, Sun, Moon, Bell, ChevronDown, Menu, LogOut, Repeat, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

export default function Topbar({ onMenuClick }) {
  const { currentUser, users, logout, switchUser } = useAuth()
  const { dark, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const initials = currentUser?.name
    ?.split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-3 sm:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <button onClick={onMenuClick} className="lg:hidden text-gray-500 shrink-0">
          <Menu size={22} />
        </button>

        <div className="hidden sm:flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 w-full max-w-md">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            placeholder="Search products, invoices..."
            className="bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200"
          />
        </div>

        <button className="sm:hidden text-gray-400 ml-1">
          <Search size={20} />
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <button className="hidden md:block text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5">
          Main Store
        </button>

        <button onClick={toggleTheme} className="flex items-center gap-1 text-gray-400 hover:text-gray-600" title="Toggle theme">
          {dark ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        <Bell size={18} className="text-gray-400 cursor-pointer" />

        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0">
              {initials || 'U'}
            </div>
            <span className="hidden sm:block max-w-[120px] truncate">{currentUser?.name}</span>
            <ChevronDown size={14} className="hidden sm:block" />
          </button>

          {menuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 py-2">
                <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800">
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">{currentUser?.name}</div>
                  <div className="text-xs text-gray-400">{currentUser?.role} · {currentUser?.email}</div>
                </div>

                <div className="px-2 py-1">
                  <div className="text-[11px] text-gray-400 px-2 py-1 flex items-center gap-1">
                    <Repeat size={11} /> Switch user (demo)
                  </div>
                  {users.filter((u) => u.id !== currentUser?.id).map((u) => (
                    <button
                      key={u.id}
                      onClick={() => { switchUser(u.id); setMenuOpen(false) }}
                      className="w-full text-left px-2 py-1.5 rounded-lg text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2"
                    >
                      <User size={13} /> {u.name} <span className="text-gray-400">— {u.role}</span>
                    </button>
                  ))}
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 mt-1 pt-1 px-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-2 py-1.5 rounded-lg text-xs text-red-500 hover:bg-red-50 dark:hover:bg-red-950 flex items-center gap-2"
                  >
                    <LogOut size={13} /> Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}