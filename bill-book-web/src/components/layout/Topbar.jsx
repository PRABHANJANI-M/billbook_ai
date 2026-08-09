import { useEffect, useState } from 'react'
import { Search, Sun, Moon, Bell, ChevronDown, Menu, LogOut, Repeat, User } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

export default function Topbar({ onMenuClick }) {
  const { currentUser, users, logout, switchUser } = useAuth()
  const { dark, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    logout()
    setMenuOpen(false)
    navigate('/login')
  }

  const initials = currentUser?.name
    ?.split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/95 px-3 backdrop-blur sm:px-6 dark:border-slate-800 dark:bg-slate-900/95">
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <button onClick={onMenuClick} className="shrink-0 rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden">
          <Menu size={22} />
        </button>

        <div className="hidden w-full max-w-md items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 sm:flex dark:border-slate-700 dark:bg-slate-800">
          <Search size={16} className="shrink-0 text-gray-400" />
          <input
            placeholder="Search products, invoices..."
            className="w-full bg-transparent text-sm text-gray-700 outline-none dark:text-slate-200"
          />
        </div>

        <button className="ml-1 text-gray-400 sm:hidden">
          <Search size={20} />
        </button>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <button className="hidden rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 dark:border-slate-700 dark:text-slate-300 md:block">
          Main Store
        </button>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-1 rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:text-gray-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-slate-100"
          title="Toggle theme"
        >
          {dark ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        <button className="rounded-lg border border-gray-200 p-2 text-gray-400 transition hover:text-gray-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-slate-100">
          <Bell size={18} />
        </button>

        <div className="relative">
          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-950/70 dark:text-indigo-300">
              {initials || 'U'}
            </div>
            <span className="hidden max-w-[120px] truncate sm:block">{currentUser?.name}</span>
            <ChevronDown size={14} className="hidden sm:block" />
          </button>

          {menuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl z-50 dark:border-slate-700 dark:bg-slate-900">
                <div className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-3 dark:border-slate-800 dark:bg-slate-800/70">
                  <div className="text-sm font-semibold text-gray-800 dark:text-slate-100">{currentUser?.name}</div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-slate-400">
                    {currentUser?.role} · {currentUser?.email}
                  </div>
                </div>

                <div className="mt-2 px-1 py-1">
                  <div className="mb-1 flex items-center gap-1 px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-gray-400 dark:text-slate-500">
                    <Repeat size={11} /> Switch user
                  </div>
                  {users.filter((user) => user.id !== currentUser?.id).map((user) => (
                    <button
                      key={user.id}
                      onClick={() => {
                        switchUser(user.id)
                        setMenuOpen(false)
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-xs text-gray-600 transition hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      <User size={13} />
                      <span className="flex-1">{user.name}</span>
                      <span className="text-gray-400 dark:text-slate-500">{user.role}</span>
                    </button>
                  ))}
                </div>

              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}