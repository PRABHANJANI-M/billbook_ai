import { Search, Sun, Bell, ChevronDown, Menu } from 'lucide-react'

export default function Topbar({ onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 sm:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <button onClick={onMenuClick} className="lg:hidden text-gray-500 shrink-0">
          <Menu size={22} />
        </button>

        <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-full max-w-md">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            placeholder="Search products, invoices..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        {/* Mobile: icon-only search trigger */}
        <button className="sm:hidden text-gray-400 ml-1">
          <Search size={20} />
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <button className="hidden md:block text-sm font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5">
          Main Store
        </button>

        <div className="hidden md:flex items-center gap-1 text-gray-400">
          <Sun size={16} />
          <div className="w-8 h-4 bg-gray-200 rounded-full relative">
            <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5 shadow" />
          </div>
        </div>

        <Bell size={18} className="text-gray-400 cursor-pointer" />

        <div className="hidden sm:flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
          <span className="max-w-[120px] truncate">System Administrator</span>
          <ChevronDown size={14} />
        </div>
        {/* Mobile: avatar-only */}
        <div className="sm:hidden w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">
          SA
        </div>
      </div>
    </header>
  )
}