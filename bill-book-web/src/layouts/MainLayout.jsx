import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}