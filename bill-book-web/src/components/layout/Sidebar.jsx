import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, ShoppingCart, Package, Boxes, Receipt,
  ShoppingBag, Wallet, Users, Landmark, FileBarChart, Settings,
  ChevronDown, PlusSquare, ListTree, Tag, Ruler, Factory, Upload,
  ScanLine, PackagePlus, PackageMinus, ArrowLeftRight, FileText,
  FilePlus, Undo2, Percent, Truck, PackageX, ReceiptText,
  ClipboardList, RotateCcw, HandCoins, FileSpreadsheet, Building2,
  Search as SearchIcon, BookOpen, TrendingUp,
  AlertTriangle, XCircle, Activity, BarChart3, PieChart, Zap,
  DollarSign, FileClock, Sliders, Store, KeyRound, Layers, Bell, History, X, LogOut
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useData } from '../../context/DataContext'
import { useAuth } from '../../context/AuthContext'

const NavItem = ({ to, icon: Icon, label, onNavigate, active = false, end = false }) => (
  <NavLink
    to={to}
    end={end}
    onClick={onNavigate}
    className={({ isActive }) => {
      const isSelected = isActive
      return `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
        isSelected
          ? 'font-medium text-indigo-600 dark:text-indigo-300'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:bg-slate-800 dark:focus:text-slate-100'
      }`
    }}
  >
    <Icon size={17} />
    {label}
  </NavLink>
)

const Group = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400 transition hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200"
      >
        {title}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="flex flex-col gap-0.5 pl-1">{children}</div>}
    </div>
  )
}

export default function Sidebar({ open, onClose }) {
  const nav = onClose
  const { logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState('')
  const { products } = useData()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const isInvoiceRoute = location.pathname.startsWith('/sales/invoices')
  const isChallanRoute = location.pathname.startsWith('/sales/challans')

  const content = (
    <>
      <div className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-gray-100 px-4 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path d="M12 3c2 2.5 2.7 4.4 2.7 6.2 0 2-1.6 3.5-3.7 3.5S7.3 11.2 7.3 9.2C7.3 7.4 8 5.5 10 3c.1 1.4.6 2.5 2 3.3-.6-.6-1-1.3-1-2.3 0-.6.2-1.1.5-1.5.3.4.5.9.5 1.5 0 1-.4 1.7-1 2.3 1.4-.8 1.9-1.9 2-3.3Z" />
              <path d="M8.5 13c1.1 1.3 2.4 2 4.5 2s3.4-.7 4.5-2" />
              <path d="M9 15c.8 1.2 1.7 1.8 3 1.8s2.2-.6 3-1.8" />
            </svg>
          </div>
          <span className="font-bold tracking-wide text-gray-800 dark:text-slate-100">BLOOMS POS</span>
        </div>
        <button onClick={onClose} className="rounded-lg p-1.5 text-gray-400 transition hover:bg-slate-800 hover:text-slate-100 dark:text-slate-400 md:hidden">
          <X size={20} />
        </button>
      </div>

      {/* Search (moved from header) */}
      <div className="px-4 py-3 border-b border-gray-100 dark:border-slate-800">
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
          <SearchIcon size={16} className="shrink-0 text-gray-400 dark:text-slate-500" />
          <input
            value={searchTerm}
            onChange={(e) => {
              e.stopPropagation()
              const v = e.target.value
              console.log('Sidebar search changed:', v)
              setSearchTerm(v)
            }}
            onKeyDown={(e) => e.stopPropagation()}
            placeholder="Search products, invoices..."
            className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400 dark:text-slate-200 dark:placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* live suggestions inside sidebar (no navigation, no global events) */}
      {searchTerm && (
        <div className="px-3 py-2">
          <ul className="max-h-48 overflow-y-auto rounded-md bg-white border border-gray-100 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            {products
              .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .slice(0, 6)
              .map((p) => (
                <li
                  key={p.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSearchTerm(p.name)
                    console.log('Sidebar suggestion selected:', p.name)
                  }}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 text-sm text-gray-700 dark:text-slate-200"
                >
                  {p.name}
                </li>
              ))}
            {products.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-400">No matches</li>
            )}
          </ul>
        </div>
      )}

      {/* dim nav items while searching to focus attention */}

      <nav className={`flex-1 overflow-y-auto px-2 py-3 transition-opacity ${searchTerm ? 'opacity-40' : 'opacity-100'}`}>
        <div className="mb-1">
          <NavItem to="/" icon={LayoutDashboard} label="Dashboard" onNavigate={nav} active={location.pathname === '/'} end />
          <NavItem to="/pos" icon={ShoppingCart} label="POS Terminal" onNavigate={nav} active={location.pathname.startsWith('/pos')} end />
        </div>

        <Group title="Inventory" defaultOpen>
          <NavItem to="/products" icon={Package} label="All Products" onNavigate={nav} active={location.pathname.startsWith('/products') && !location.pathname.startsWith('/products/')} end />
          <NavItem to="/products/add" icon={PlusSquare} label="Add Product" onNavigate={nav} active={location.pathname.startsWith('/products/add')} end />
          <NavItem to="/products/categories" icon={ListTree} label="Categories" onNavigate={nav} active={location.pathname.startsWith('/products/categories')} end />
          <NavItem to="/products/brands" icon={Tag} label="Brands" onNavigate={nav} active={location.pathname.startsWith('/products/brands')} end />
          <NavItem to="/products/units" icon={Ruler} label="Units" onNavigate={nav} active={location.pathname.startsWith('/products/units')} end />
          <NavItem to="/products/manufacturers" icon={Factory} label="Manufacturers" onNavigate={nav} active={location.pathname.startsWith('/products/manufacturers')} end />
          <NavItem to="/products/import" icon={Upload} label="Import CSV" onNavigate={nav} active={location.pathname.startsWith('/products/import')} end />
          <NavItem to="/products/barcode-labels" icon={ScanLine} label="Barcode Labels" onNavigate={nav} active={location.pathname.startsWith('/products/barcode-labels')} end />
          <NavItem to="/stock/opening" icon={PackagePlus} label="Opening Stock" onNavigate={nav} active={location.pathname.startsWith('/stock/opening')} end />
          <NavItem to="/stock/adjustments" icon={PackageMinus} label="Adjustments" onNavigate={nav} active={location.pathname.startsWith('/stock/adjustments')} end />
          <NavItem to="/stock/transfers" icon={ArrowLeftRight} label="Transfers" onNavigate={nav} active={location.pathname.startsWith('/stock/transfers')} end />
        </Group>

        <Group title="Transactions" defaultOpen>
          <NavItem to="/sales/orders" icon={FileText} label="Sales Orders" onNavigate={nav} active={location.pathname.startsWith('/sales/orders')} end />
          <NavItem to="/sales/orders/new" icon={FilePlus} label="New Sales Order" onNavigate={nav} active={location.pathname.startsWith('/sales/orders/new')} end />
          <NavItem to="/sales/invoices" icon={ReceiptText} label="All Invoices" onNavigate={nav} active={isInvoiceRoute} end />
          <NavItem to="/sales/invoices/new" icon={FilePlus} label="New Invoice" onNavigate={nav} active={isInvoiceRoute} end />
          <NavItem to="/sales/returns" icon={Undo2} label="Sale Returns" onNavigate={nav} active={location.pathname.startsWith('/sales/returns')} end />
          <NavItem to="/sales/discounts" icon={Percent} label="Discounts" onNavigate={nav} active={location.pathname.startsWith('/sales/discounts')} end />
          <NavItem to="/sales/challans" icon={Truck} label="Delivery Challans" onNavigate={nav} active={isChallanRoute} end />
          <NavItem to="/sales/challans/new" icon={FilePlus} label="New Challan" onNavigate={nav} active={isChallanRoute} end />
          <NavItem to="/sales/dc-returns" icon={PackageX} label="DC Returns" onNavigate={nav} active={location.pathname.startsWith('/sales/dc-returns')} end />
          <NavItem to="/sales/receive-payments" icon={HandCoins} label="Receive Payments" onNavigate={nav} active={location.pathname.startsWith('/sales/receive-payments')} end />
          <NavItem to="/purchases/orders" icon={ClipboardList} label="Purchase Orders" onNavigate={nav} active={location.pathname.startsWith('/purchases/orders')} end />
          <NavItem to="/purchases/orders/new" icon={FilePlus} label="New PO" onNavigate={nav} active={location.pathname.startsWith('/purchases/orders/new')} end />
          <NavItem to="/purchases" icon={ShoppingBag} label="All Purchases" onNavigate={nav} active={location.pathname.startsWith('/purchases') && location.pathname !== '/purchases/orders' && location.pathname !== '/purchases/orders/new' && location.pathname !== '/purchases/new'} end />
          <NavItem to="/purchases/new" icon={FilePlus} label="New Purchase" onNavigate={nav} active={location.pathname.startsWith('/purchases/new')} end />
          <NavItem to="/purchases/returns" icon={RotateCcw} label="Purchase Returns" onNavigate={nav} active={location.pathname.startsWith('/purchases/returns')} end />
          <NavItem to="/purchases/pay-suppliers" icon={DollarSign} label="Pay Suppliers" onNavigate={nav} active={location.pathname.startsWith('/purchases/pay-suppliers')} end />
          <NavItem to="/expenses" icon={Wallet} label="Expenses" onNavigate={nav} active={location.pathname.startsWith('/expenses')} end />
        </Group>

        <Group title="People">
          <NavItem to="/contacts" icon={Users} label="Contacts" onNavigate={nav} active={location.pathname.startsWith('/contacts')} end />
          <NavItem to="/staff" icon={Users} label="Staff / HR" onNavigate={nav} active={location.pathname.startsWith('/staff')} end />
        </Group>

        <Group title="Accounts">
          <NavItem to="/gst/gstr1" icon={FileSpreadsheet} label="GSTR-1" onNavigate={nav} active={location.pathname.startsWith('/gst/gstr1')} end />
          <NavItem to="/gst/gstr3b" icon={FileSpreadsheet} label="GSTR-3B" onNavigate={nav} active={location.pathname.startsWith('/gst/gstr3b')} end />
          <NavItem to="/gst/tax-profiles" icon={BookOpen} label="Tax Profiles" onNavigate={nav} active={location.pathname.startsWith('/gst/tax-profiles')} end />
          <NavItem to="/gst/tds-tcs" icon={Landmark} label="TDS / TCS" onNavigate={nav} active={location.pathname.startsWith('/gst/tds-tcs')} end />
          <NavItem to="/gst/gstin-lookup" icon={SearchIcon} label="GSTIN Lookup" onNavigate={nav} active={location.pathname.startsWith('/gst/gstin-lookup')} end />
          <NavItem to="/accounting" icon={Building2} label="Accounting" onNavigate={nav} active={location.pathname.startsWith('/accounting')} end />
          <NavItem to="/accounting/bank" icon={Landmark} label="Bank Accounts" onNavigate={nav} active={location.pathname.startsWith('/accounting/bank')} end />
        </Group>

        <Group title="Reports">
          <NavItem to="/reports/inventory" icon={LayoutDashboard} label="Inventory Dashboard" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory')} end />
          <NavItem to="/reports/inventory/current-stock" icon={Boxes} label="Current Stock" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/current-stock')} end />
          <NavItem to="/reports/inventory/low-stock" icon={AlertTriangle} label="Low Stock" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/low-stock')} end />
          <NavItem to="/reports/inventory/out-of-stock" icon={XCircle} label="Out of Stock" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/out-of-stock')} end />
          <NavItem to="/reports/inventory/stock-movement" icon={Activity} label="Stock Movement" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/stock-movement')} end />
          <NavItem to="/reports/inventory/purchase-summary" icon={BarChart3} label="Purchase Summary" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/purchase-summary')} end />
          <NavItem to="/reports/inventory/sales-summary" icon={PieChart} label="Sales Summary" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/sales-summary')} end />
          <NavItem to="/reports/inventory/stock-adjustments" icon={Sliders} label="Stock Adjustments" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/stock-adjustments')} end />
          <NavItem to="/reports/inventory/dead-stock" icon={PackageX} label="Dead Stock" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/dead-stock')} end />
          <NavItem to="/reports/inventory/fast-slow" icon={Zap} label="Fast / Slow Items" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/fast-slow')} end />
          <NavItem to="/reports/sales" icon={TrendingUp} label="Sales Report" onNavigate={nav} active={location.pathname.startsWith('/reports/sales')} end />
          <NavItem to="/reports/purchases" icon={FileBarChart} label="Purchase Report" onNavigate={nav} active={location.pathname.startsWith('/reports/purchases')} end />
          <NavItem to="/reports/dc" icon={Truck} label="DC Report" onNavigate={nav} active={location.pathname.startsWith('/reports/dc')} end />
          <NavItem to="/reports/expenses" icon={Wallet} label="Expense Report" onNavigate={nav} active={location.pathname.startsWith('/reports/expenses')} end />
          <NavItem to="/reports/payments" icon={HandCoins} label="Payment Report" onNavigate={nav} active={location.pathname.startsWith('/reports/payments')} end />
          <NavItem to="/reports/cash-flow" icon={DollarSign} label="Cash Flow Statement" onNavigate={nav} active={location.pathname.startsWith('/reports/cash-flow')} end />
          <NavItem to="/reports/balance-sheet" icon={FileClock} label="Balance Sheet" onNavigate={nav} active={location.pathname.startsWith('/reports/balance-sheet')} end />
        </Group>

        <Group title="System">
          <NavItem to="/settings/app" icon={Settings} label="App Settings" onNavigate={nav} active={location.pathname.startsWith('/settings/app')} end />
          <NavItem to="/settings/stores" icon={Store} label="Stores" onNavigate={nav} active={location.pathname.startsWith('/settings/stores')} end />
          <NavItem to="/settings/roles" icon={KeyRound} label="Roles & Permissions" onNavigate={nav} active={location.pathname.startsWith('/settings/roles')} end />
          <NavItem to="/settings/module-access" icon={Layers} label="Module Access" onNavigate={nav} active={location.pathname.startsWith('/settings/module-access')} end />
          <NavItem to="/settings/reminders" icon={Bell} label="Reminders" onNavigate={nav} active={location.pathname.startsWith('/settings/reminders')} end />
          <NavItem to="/settings/activity-log" icon={History} label="Activity Log" onNavigate={nav} active={location.pathname.startsWith('/settings/activity-log')} end />
        </Group>
      </nav>

      <div className="shrink-0 border-t border-gray-100 p-3 dark:border-slate-800">
        <button onClick={handleLogout} className="flex items-center gap-2 w-full rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-950">
          <LogOut size={14} /> Logout
        </button>
      </div>
    </>
  )

  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col overflow-hidden border-r border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:flex">
        {content}
      </aside>

      {open && <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={onClose} />}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 max-w-[85vw] flex-col overflow-hidden border-r border-gray-200 bg-white transition-transform duration-200 dark:border-slate-800 dark:bg-slate-900 md:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {content}
      </aside>
    </>
  )
}