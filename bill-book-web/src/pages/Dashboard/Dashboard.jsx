import { LayoutDashboard, FileText, Receipt, ShoppingCart, Truck, ArrowDownLeft,
  Package, Users, Building2, Search, FileSpreadsheet, Landmark, Bell,
  ScanBarcode, PlusSquare, FileEdit, ClipboardList } from 'lucide-react'
import StatCard from '../../components/common/StatCard'
import SalesChart from '../../components/charts/SalesChart'
import TopProductsChart from '../../components/charts/TopProductsChart'
import DataTable from '../../components/common/DataTable'
import { dashboardStats, salesLast14Days, topProducts, recentSales, recentPurchases } from '../../data/sampleDashboard'
import { formatCurrency, formatDate } from '../../utils/format'

const quickActions = [
  { label: 'POS', icon: ShoppingCart },
  { label: 'New Sale', icon: FileEdit },
  { label: 'Collect Due', icon: Receipt },
  { label: 'New PO', icon: ClipboardList },
  { label: 'New Purchase', icon: PlusSquare },
  { label: 'New Challan', icon: Truck },
  { label: 'DC Returns', icon: ArrowDownLeft },
  { label: 'Products', icon: Package },
  { label: 'Customers', icon: Users },
  { label: 'Suppliers', icon: Building2 },
  { label: 'Inv. Dashboard', icon: LayoutDashboard },
  { label: 'GSTIN Lookup', icon: Search },
  { label: 'GSTR-1', icon: FileSpreadsheet },
  { label: 'Balance Sheet', icon: Landmark },
  { label: 'Reminders', icon: Bell },
]

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <LayoutDashboard size={20} /> Dashboard
        </h1>
        <div className="flex items-center gap-2">
          <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm">
            <option>This Month</option>
          </select>
          <input type="date" className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm" />
          <input type="date" className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm" />
          <button className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm">Customize Widgets</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard label="Total Sales" value={formatCurrency(dashboardStats.totalSales)} linkText="View" />
        <StatCard label="Sales Due" value={formatCurrency(dashboardStats.salesDue)} linkText="Collect" accent="red" />
        <StatCard label="Purchases" value={formatCurrency(dashboardStats.purchases)} linkText="View" />
        <StatCard label="Purchase Due" value={formatCurrency(dashboardStats.purchaseDue)} linkText="Pay" accent="red" />
        <StatCard label="Expenses" value={formatCurrency(dashboardStats.expenses)} linkText="View" accent="red" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Challans" value={dashboardStats.totalChallans} linkText="View all" />
        <StatCard label="Draft / Pending" value={dashboardStats.draftPending} accent="blue" />
        <StatCard label="In Transit" value={dashboardStats.inTransit} accent="blue" />
        <StatCard label="Active EWBs" value={dashboardStats.activeEWBs} accent="green" />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
          {quickActions.map((a) => (
            <button key={a.label} className="flex flex-col items-center gap-1.5 py-3 rounded-lg hover:bg-gray-50">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <a.icon size={17} />
              </div>
              <span className="text-[11px] text-gray-600 text-center leading-tight">{a.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SalesChart data={salesLast14Days} />
        <TopProductsChart data={topProducts} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-700">Recent Sales</h3>
            <button className="text-xs text-indigo-600">All</button>
          </div>
          <DataTable
            columns={[
              { key: 'ref', label: 'Ref' },
              { key: 'date', label: 'Date' },
              { key: 'customer', label: 'Customer' },
              { key: 'total', label: 'Total', render: (r) => formatCurrency(r.total) },
              { key: 'status', label: 'Status' },
            ]}
            data={recentSales}
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-700">Recent Purchases</h3>
            <button className="text-xs text-indigo-600">All</button>
          </div>
          <DataTable
            columns={[
              { key: 'ref', label: 'Ref' },
              { key: 'date', label: 'Date' },
              { key: 'supplier', label: 'Supplier' },
              { key: 'total', label: 'Total', render: (r) => formatCurrency(r.total) },
              { key: 'status', label: 'Status' },
            ]}
            data={recentPurchases}
          />
        </div>
      </div>
    </div>
  )
}