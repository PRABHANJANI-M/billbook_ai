import { LayoutDashboard } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import StatCard from '../../../components/common/StatCard'
import { inventoryOverviewStats, inventoryReportTabs } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

export default function InventoryDashboard() {
  return (
    <div>
      <PageHeader icon={LayoutDashboard} title="Inventory Reports" />
      <ReportTabs tabs={inventoryReportTabs} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard label="Products Purchased" value={inventoryOverviewStats.productsPurchased} />
        <StatCard label="Total Quantity" value={inventoryOverviewStats.totalQuantity} accent="blue" />
        <StatCard label="Total Value" value={formatCurrency(inventoryOverviewStats.totalValue)} accent="green" />
      </div>
    </div>
  )
}   