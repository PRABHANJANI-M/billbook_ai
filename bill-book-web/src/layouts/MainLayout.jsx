import { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Sidebar open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <div className="flex-1 flex flex-col">
        <Topbar onMenuClick={() => setMobileMenuOpen((s) => !s)} />
        <main className="flex-1 p-6 bg-gray-50 dark:bg-slate-950">
          <Outlet />
        </main>
      </div>
    </div>
  )
}