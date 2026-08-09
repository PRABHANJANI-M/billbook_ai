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
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const NavItem = ({ to, icon: Icon, label, onNavigate, active = false }) => (
  <NavLink
    to={to}
    onClick={onNavigate}
    className={({ isActive }) => {
      const isSelected = active || isActive
      return `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
        isSelected
          ? 'bg-indigo-50 font-medium text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300'
          : 'text-gray-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800'
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
        className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500"
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
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">T</div>
          <span className="font-bold tracking-wide text-gray-800 dark:text-slate-100">TRUEZOR ERP</span>
        </div>
        <button onClick={onClose} className="text-gray-400 dark:text-slate-400 lg:hidden">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3">
        <div className="mb-1">
          <NavItem to="/" icon={LayoutDashboard} label="Dashboard" onNavigate={nav} active={location.pathname === '/'} />
          <NavItem to="/pos" icon={ShoppingCart} label="POS Terminal" onNavigate={nav} active={location.pathname.startsWith('/pos')} />
        </div>

        <Group title="Inventory" defaultOpen>
          <NavItem to="/products" icon={Package} label="All Products" onNavigate={nav} active={location.pathname.startsWith('/products') && !location.pathname.startsWith('/products/')} />
          <NavItem to="/products/add" icon={PlusSquare} label="Add Product" onNavigate={nav} active={location.pathname.startsWith('/products/add')} />
          <NavItem to="/products/categories" icon={ListTree} label="Categories" onNavigate={nav} active={location.pathname.startsWith('/products/categories')} />
          <NavItem to="/products/brands" icon={Tag} label="Brands" onNavigate={nav} active={location.pathname.startsWith('/products/brands')} />
          <NavItem to="/products/units" icon={Ruler} label="Units" onNavigate={nav} active={location.pathname.startsWith('/products/units')} />
          <NavItem to="/products/manufacturers" icon={Factory} label="Manufacturers" onNavigate={nav} active={location.pathname.startsWith('/products/manufacturers')} />
          <NavItem to="/products/import" icon={Upload} label="Import CSV" onNavigate={nav} active={location.pathname.startsWith('/products/import')} />
          <NavItem to="/products/barcode-labels" icon={ScanLine} label="Barcode Labels" onNavigate={nav} active={location.pathname.startsWith('/products/barcode-labels')} />
          <NavItem to="/stock/opening" icon={PackagePlus} label="Opening Stock" onNavigate={nav} active={location.pathname.startsWith('/stock/opening')} />
          <NavItem to="/stock/adjustments" icon={PackageMinus} label="Adjustments" onNavigate={nav} active={location.pathname.startsWith('/stock/adjustments')} />
          <NavItem to="/stock/transfers" icon={ArrowLeftRight} label="Transfers" onNavigate={nav} active={location.pathname.startsWith('/stock/transfers')} />
        </Group>

        <Group title="Transactions" defaultOpen>
          <NavItem to="/sales/orders" icon={FileText} label="Sales Orders" onNavigate={nav} active={location.pathname.startsWith('/sales/orders')} />
          <NavItem to="/sales/orders/new" icon={FilePlus} label="New Sales Order" onNavigate={nav} active={location.pathname.startsWith('/sales/orders/new')} />
          <NavItem to="/sales/invoices" icon={ReceiptText} label="All Invoices" onNavigate={nav} active={isInvoiceRoute} />
          <NavItem to="/sales/invoices/new" icon={FilePlus} label="New Invoice" onNavigate={nav} active={isInvoiceRoute} />
          <NavItem to="/sales/returns" icon={Undo2} label="Sale Returns" onNavigate={nav} active={location.pathname.startsWith('/sales/returns')} />
          <NavItem to="/sales/discounts" icon={Percent} label="Discounts" onNavigate={nav} active={location.pathname.startsWith('/sales/discounts')} />
          <NavItem to="/sales/challans" icon={Truck} label="Delivery Challans" onNavigate={nav} active={isChallanRoute} />
          <NavItem to="/sales/challans/new" icon={FilePlus} label="New Challan" onNavigate={nav} active={isChallanRoute} />
          <NavItem to="/sales/dc-returns" icon={PackageX} label="DC Returns" onNavigate={nav} active={location.pathname.startsWith('/sales/dc-returns')} />
          <NavItem to="/sales/receive-payments" icon={HandCoins} label="Receive Payments" onNavigate={nav} active={location.pathname.startsWith('/sales/receive-payments')} />
          <NavItem to="/purchases/orders" icon={ClipboardList} label="Purchase Orders" onNavigate={nav} active={location.pathname.startsWith('/purchases/orders')} />
          <NavItem to="/purchases/orders/new" icon={FilePlus} label="New PO" onNavigate={nav} active={location.pathname.startsWith('/purchases/orders/new')} />
          <NavItem to="/purchases" icon={ShoppingBag} label="All Purchases" onNavigate={nav} active={location.pathname.startsWith('/purchases') && location.pathname !== '/purchases/orders' && location.pathname !== '/purchases/orders/new' && location.pathname !== '/purchases/new'} />
          <NavItem to="/purchases/new" icon={FilePlus} label="New Purchase" onNavigate={nav} active={location.pathname.startsWith('/purchases/new')} />
          <NavItem to="/purchases/returns" icon={RotateCcw} label="Purchase Returns" onNavigate={nav} active={location.pathname.startsWith('/purchases/returns')} />
          <NavItem to="/purchases/pay-suppliers" icon={DollarSign} label="Pay Suppliers" onNavigate={nav} active={location.pathname.startsWith('/purchases/pay-suppliers')} />
          <NavItem to="/expenses" icon={Wallet} label="Expenses" onNavigate={nav} active={location.pathname.startsWith('/expenses')} />
        </Group>

        <Group title="People">
          <NavItem to="/contacts" icon={Users} label="Contacts" onNavigate={nav} active={location.pathname.startsWith('/contacts')} />
          <NavItem to="/staff" icon={Users} label="Staff / HR" onNavigate={nav} active={location.pathname.startsWith('/staff')} />
        </Group>

        <Group title="Accounts">
          <NavItem to="/gst/gstr1" icon={FileSpreadsheet} label="GSTR-1" onNavigate={nav} active={location.pathname.startsWith('/gst/gstr1')} />
          <NavItem to="/gst/gstr3b" icon={FileSpreadsheet} label="GSTR-3B" onNavigate={nav} active={location.pathname.startsWith('/gst/gstr3b')} />
          <NavItem to="/gst/tax-profiles" icon={BookOpen} label="Tax Profiles" onNavigate={nav} active={location.pathname.startsWith('/gst/tax-profiles')} />
          <NavItem to="/gst/tds-tcs" icon={Landmark} label="TDS / TCS" onNavigate={nav} active={location.pathname.startsWith('/gst/tds-tcs')} />
          <NavItem to="/gst/gstin-lookup" icon={SearchIcon} label="GSTIN Lookup" onNavigate={nav} active={location.pathname.startsWith('/gst/gstin-lookup')} />
          <NavItem to="/accounting" icon={Building2} label="Accounting" onNavigate={nav} active={location.pathname.startsWith('/accounting')} />
          <NavItem to="/accounting/bank" icon={Landmark} label="Bank Accounts" onNavigate={nav} active={location.pathname.startsWith('/accounting/bank')} />
        </Group>

        <Group title="Reports">
          <NavItem to="/reports/inventory" icon={LayoutDashboard} label="Inventory Dashboard" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory')} />
          <NavItem to="/reports/inventory/current-stock" icon={Boxes} label="Current Stock" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/current-stock')} />
          <NavItem to="/reports/inventory/low-stock" icon={AlertTriangle} label="Low Stock" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/low-stock')} />
          <NavItem to="/reports/inventory/out-of-stock" icon={XCircle} label="Out of Stock" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/out-of-stock')} />
          <NavItem to="/reports/inventory/stock-movement" icon={Activity} label="Stock Movement" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/stock-movement')} />
          <NavItem to="/reports/inventory/purchase-summary" icon={BarChart3} label="Purchase Summary" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/purchase-summary')} />
          <NavItem to="/reports/inventory/sales-summary" icon={PieChart} label="Sales Summary" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/sales-summary')} />
          <NavItem to="/reports/inventory/stock-adjustments" icon={Sliders} label="Stock Adjustments" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/stock-adjustments')} />
          <NavItem to="/reports/inventory/dead-stock" icon={PackageX} label="Dead Stock" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/dead-stock')} />
          <NavItem to="/reports/inventory/fast-slow" icon={Zap} label="Fast / Slow Items" onNavigate={nav} active={location.pathname.startsWith('/reports/inventory/fast-slow')} />
          <NavItem to="/reports/sales" icon={TrendingUp} label="Sales Report" onNavigate={nav} active={location.pathname.startsWith('/reports/sales')} />
          <NavItem to="/reports/purchases" icon={FileBarChart} label="Purchase Report" onNavigate={nav} active={location.pathname.startsWith('/reports/purchases')} />
          <NavItem to="/reports/dc" icon={Truck} label="DC Report" onNavigate={nav} active={location.pathname.startsWith('/reports/dc')} />
          <NavItem to="/reports/expenses" icon={Wallet} label="Expense Report" onNavigate={nav} active={location.pathname.startsWith('/reports/expenses')} />
          <NavItem to="/reports/payments" icon={HandCoins} label="Payment Report" onNavigate={nav} active={location.pathname.startsWith('/reports/payments')} />
          <NavItem to="/reports/cash-flow" icon={DollarSign} label="Cash Flow Statement" onNavigate={nav} active={location.pathname.startsWith('/reports/cash-flow')} />
          <NavItem to="/reports/balance-sheet" icon={FileClock} label="Balance Sheet" onNavigate={nav} active={location.pathname.startsWith('/reports/balance-sheet')} />
        </Group>

        <Group title="System">
          <NavItem to="/settings/app" icon={Settings} label="App Settings" onNavigate={nav} active={location.pathname.startsWith('/settings/app')} />
          <NavItem to="/settings/stores" icon={Store} label="Stores" onNavigate={nav} active={location.pathname.startsWith('/settings/stores')} />
          <NavItem to="/settings/roles" icon={KeyRound} label="Roles & Permissions" onNavigate={nav} active={location.pathname.startsWith('/settings/roles')} />
          <NavItem to="/settings/module-access" icon={Layers} label="Module Access" onNavigate={nav} active={location.pathname.startsWith('/settings/module-access')} />
          <NavItem to="/settings/reminders" icon={Bell} label="Reminders" onNavigate={nav} active={location.pathname.startsWith('/settings/reminders')} />
          <NavItem to="/settings/activity-log" icon={History} label="Activity Log" onNavigate={nav} active={location.pathname.startsWith('/settings/activity-log')} />
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
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col overflow-hidden border-r border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:flex">
        {content}
      </aside>

      {open && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={onClose} />}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 max-w-[85vw] flex-col overflow-hidden border-r border-gray-200 bg-white transition-transform duration-200 dark:border-slate-800 dark:bg-slate-900 lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {content}
      </aside>
    </>
  )
}