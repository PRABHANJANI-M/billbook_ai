import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, ShoppingCart, Package, Boxes, Receipt,
  ShoppingBag, Wallet, Users, Landmark, FileBarChart, Settings,
  ChevronDown, PlusSquare, ListTree, Tag, Ruler, Factory, Upload,
  ScanLine, PackagePlus, PackageMinus, ArrowLeftRight, FileText,
  FilePlus, Undo2, Percent, Truck, PackageX, ReceiptText,
  ClipboardList, RotateCcw, HandCoins, FileSpreadsheet, Building2,
  Search as SearchIcon, BookOpen, TrendingUp,
  AlertTriangle, XCircle, Activity, BarChart3, PieChart, Zap,
  DollarSign, FileClock, Sliders, Store, KeyRound, Layers, Bell, History, X
} from 'lucide-react'
import { useState } from 'react'

const NavItem = ({ to, icon: Icon, label, onNavigate }) => (
  <NavLink
    to={to}
    onClick={onNavigate}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
        isActive ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
      }`
    }
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
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide"
      >
        {title}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="flex flex-col gap-0.5 pl-1">{children}</div>}
    </div>
  )
}

export default function Sidebar({ open, onClose }) {
  const nav = onClose // shorthand passed to NavItems so a click closes the drawer on mobile

  const content = (
    <>
      <div className="flex items-center justify-between gap-2 px-4 h-16 border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">T</div>
          <span className="font-bold text-gray-800 tracking-wide">TRUEZOR ERP</span>
        </div>
        <button onClick={onClose} className="lg:hidden text-gray-400">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-2 py-3 overflow-y-auto">
        <div className="mb-1">
          <NavItem to="/" icon={LayoutDashboard} label="Dashboard" onNavigate={nav} />
          <NavItem to="/pos" icon={ShoppingCart} label="POS Terminal" onNavigate={nav} />
        </div>

        <Group title="Inventory" defaultOpen>
          <NavItem to="/products" icon={Package} label="All Products" onNavigate={nav} />
          <NavItem to="/products/add" icon={PlusSquare} label="Add Product" onNavigate={nav} />
          <NavItem to="/products/categories" icon={ListTree} label="Categories" onNavigate={nav} />
          <NavItem to="/products/brands" icon={Tag} label="Brands" onNavigate={nav} />
          <NavItem to="/products/units" icon={Ruler} label="Units" onNavigate={nav} />
          <NavItem to="/products/manufacturers" icon={Factory} label="Manufacturers" onNavigate={nav} />
          <NavItem to="/products/import" icon={Upload} label="Import CSV" onNavigate={nav} />
          <NavItem to="/products/barcode-labels" icon={ScanLine} label="Barcode Labels" onNavigate={nav} />
          <NavItem to="/stock/opening" icon={PackagePlus} label="Opening Stock" onNavigate={nav} />
          <NavItem to="/stock/adjustments" icon={PackageMinus} label="Adjustments" onNavigate={nav} />
          <NavItem to="/stock/transfers" icon={ArrowLeftRight} label="Transfers" onNavigate={nav} />
        </Group>

        <Group title="Transactions" defaultOpen>
          <NavItem to="/sales/orders" icon={FileText} label="Sales Orders" onNavigate={nav} />
          <NavItem to="/sales/orders/new" icon={FilePlus} label="New Sales Order" onNavigate={nav} />
          <NavItem to="/sales/invoices" icon={ReceiptText} label="All Invoices" onNavigate={nav} />
          <NavItem to="/sales/invoices/new" icon={FilePlus} label="New Invoice" onNavigate={nav} />
          <NavItem to="/sales/returns" icon={Undo2} label="Sale Returns" onNavigate={nav} />
          <NavItem to="/sales/discounts" icon={Percent} label="Discounts" onNavigate={nav} />
          <NavItem to="/sales/challans" icon={Truck} label="Delivery Challans" onNavigate={nav} />
          <NavItem to="/sales/challans/new" icon={FilePlus} label="New Challan" onNavigate={nav} />
          <NavItem to="/sales/dc-returns" icon={PackageX} label="DC Returns" onNavigate={nav} />
          <NavItem to="/sales/receive-payments" icon={HandCoins} label="Receive Payments" onNavigate={nav} />
          <NavItem to="/purchases/orders" icon={ClipboardList} label="Purchase Orders" onNavigate={nav} />
          <NavItem to="/purchases/orders/new" icon={FilePlus} label="New PO" onNavigate={nav} />
          <NavItem to="/purchases" icon={ShoppingBag} label="All Purchases" onNavigate={nav} />
          <NavItem to="/purchases/new" icon={FilePlus} label="New Purchase" onNavigate={nav} />
          <NavItem to="/purchases/returns" icon={RotateCcw} label="Purchase Returns" onNavigate={nav} />
          <NavItem to="/purchases/pay-suppliers" icon={DollarSign} label="Pay Suppliers" onNavigate={nav} />
          <NavItem to="/expenses" icon={Wallet} label="Expenses" onNavigate={nav} />
        </Group>

        <Group title="People">
          <NavItem to="/contacts" icon={Users} label="Contacts" onNavigate={nav} />
          <NavItem to="/staff" icon={Users} label="Staff / HR" onNavigate={nav} />
        </Group>

        <Group title="Accounts">
          <NavItem to="/gst/gstr1" icon={FileSpreadsheet} label="GSTR-1" onNavigate={nav} />
          <NavItem to="/gst/gstr3b" icon={FileSpreadsheet} label="GSTR-3B" onNavigate={nav} />
          <NavItem to="/gst/tax-profiles" icon={BookOpen} label="Tax Profiles" onNavigate={nav} />
          <NavItem to="/gst/tds-tcs" icon={Landmark} label="TDS / TCS" onNavigate={nav} />
          <NavItem to="/gst/gstin-lookup" icon={SearchIcon} label="GSTIN Lookup" onNavigate={nav} />
          <NavItem to="/accounting" icon={Building2} label="Accounting" onNavigate={nav} />
          <NavItem to="/accounting/bank" icon={Landmark} label="Bank Accounts" onNavigate={nav} />
        </Group>

        <Group title="Reports">
          <NavItem to="/reports/inventory" icon={LayoutDashboard} label="Inventory Dashboard" onNavigate={nav} />
          <NavItem to="/reports/inventory/current-stock" icon={Boxes} label="Current Stock" onNavigate={nav} />
          <NavItem to="/reports/inventory/low-stock" icon={AlertTriangle} label="Low Stock" onNavigate={nav} />
          <NavItem to="/reports/inventory/out-of-stock" icon={XCircle} label="Out of Stock" onNavigate={nav} />
          <NavItem to="/reports/inventory/stock-movement" icon={Activity} label="Stock Movement" onNavigate={nav} />
          <NavItem to="/reports/inventory/purchase-summary" icon={BarChart3} label="Purchase Summary" onNavigate={nav} />
          <NavItem to="/reports/inventory/sales-summary" icon={PieChart} label="Sales Summary" onNavigate={nav} />
          <NavItem to="/reports/inventory/stock-adjustments" icon={Sliders} label="Stock Adjustments" onNavigate={nav} />
          <NavItem to="/reports/inventory/dead-stock" icon={PackageX} label="Dead Stock" onNavigate={nav} />
          <NavItem to="/reports/inventory/fast-slow" icon={Zap} label="Fast / Slow Items" onNavigate={nav} />
          <NavItem to="/reports/sales" icon={TrendingUp} label="Sales Report" onNavigate={nav} />
          <NavItem to="/reports/purchases" icon={FileBarChart} label="Purchase Report" onNavigate={nav} />
          <NavItem to="/reports/dc" icon={Truck} label="DC Report" onNavigate={nav} />
          <NavItem to="/reports/expenses" icon={Wallet} label="Expense Report" onNavigate={nav} />
          <NavItem to="/reports/payments" icon={HandCoins} label="Payment Report" onNavigate={nav} />
          <NavItem to="/reports/cash-flow" icon={DollarSign} label="Cash Flow Statement" onNavigate={nav} />
          <NavItem to="/reports/balance-sheet" icon={FileClock} label="Balance Sheet" onNavigate={nav} />
        </Group>

        <Group title="System">
          <NavItem to="/settings/app" icon={Settings} label="App Settings" onNavigate={nav} />
          <NavItem to="/settings/stores" icon={Store} label="Stores" onNavigate={nav} />
          <NavItem to="/settings/roles" icon={KeyRound} label="Roles & Permissions" onNavigate={nav} />
          <NavItem to="/settings/module-access" icon={Layers} label="Module Access" onNavigate={nav} />
          <NavItem to="/settings/reminders" icon={Bell} label="Reminders" onNavigate={nav} />
          <NavItem to="/settings/activity-log" icon={History} label="Activity Log" onNavigate={nav} />
        </Group>
      </nav>

      <div className="p-3 border-t border-gray-100 shrink-0">
        <button className="text-xs text-red-500 hover:underline">Logout</button>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop / tablet: persistent sidebar */}
      <aside className="hidden lg:flex w-60 h-screen sticky top-0 bg-white border-r border-gray-200 flex-col overflow-hidden shrink-0">
        {content}
      </aside>

      {/* Mobile: overlay + slide-in drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/40" onClick={onClose} />
      )}
      <aside
        className={`lg:hidden fixed top-0 left-0 z-50 w-72 max-w-[85vw] h-screen bg-white border-r border-gray-200 flex flex-col overflow-hidden transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {content}
      </aside>
    </>
  )
}