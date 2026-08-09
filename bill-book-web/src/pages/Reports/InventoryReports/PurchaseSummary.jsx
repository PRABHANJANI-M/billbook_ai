import { BarChart3 } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import StatCard from '../../../components/common/StatCard'
import { purchaseSummaryReport, inventoryReportTabs } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

export default function PurchaseSummary() {
  const productsPurchased = purchaseSummaryReport.length
  const totalQuantity = purchaseSummaryReport.reduce((s, r) => s + r.totalQty, 0)
  const totalValue = purchaseSummaryReport.reduce((s, r) => s + r.totalValue, 0)

  return (
    <div>
      <PageHeader icon={BarChart3} title="Purchase Summary" />
      <ReportTabs tabs={inventoryReportTabs} />
      <ReportFilterBar showCategory />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <StatCard label="Products Purchased" value={productsPurchased} />
        <StatCard label="Total Quantity" value={totalQuantity} accent="blue" />
        <StatCard label="Total Value" value={formatCurrency(totalValue)} accent="green" />
      </div>

      <DataTable
        columns={[
          { key: 'sku', label: 'SKU' },
          { key: 'product', label: 'Product' },
          { key: 'category', label: 'Category' },
          { key: 'transactions', label: 'Transactions' },
          { key: 'totalQty', label: 'Total Qty' },
          { key: 'avgCost', label: 'Avg Cost', render: (r) => formatCurrency(r.avgCost) },
          { key: 'minCost', label: 'Min Cost', render: (r) => formatCurrency(r.minCost) },
          { key: 'maxCost', label: 'Max Cost', render: (r) => formatCurrency(r.maxCost) },
          { key: 'totalValue', label: 'Total Value', render: (r) => formatCurrency(r.totalValue) },
          { key: 'lastPurchase', label: 'Last Purchase' },
        ]}
        data={purchaseSummaryReport}
      />
    </div>
  )
}