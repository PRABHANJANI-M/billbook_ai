import { PieChart } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import StatCard from '../../../components/common/StatCard'
import { salesSummaryReport, inventoryReportTabs } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

export default function SalesSummary() {
  const productsSold = salesSummaryReport.length
  const totalQuantity = salesSummaryReport.reduce((s, r) => s + r.totalQty, 0)
  const totalValue = salesSummaryReport.reduce((s, r) => s + r.totalValue, 0)

  return (
    <div>
      <PageHeader icon={PieChart} title="Sales Summary" />
      <ReportTabs tabs={inventoryReportTabs} />
      <ReportFilterBar showCategory />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <StatCard label="Products Sold" value={productsSold} />
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
          { key: 'avgPrice', label: 'Avg Price', render: (r) => formatCurrency(r.avgPrice) },
          { key: 'minPrice', label: 'Min Price', render: (r) => formatCurrency(r.minPrice) },
          { key: 'maxPrice', label: 'Max Price', render: (r) => formatCurrency(r.maxPrice) },
          { key: 'totalValue', label: 'Total Value', render: (r) => formatCurrency(r.totalValue) },
          { key: 'lastSale', label: 'Last Sale' },
        ]}
        data={salesSummaryReport}
      />
    </div>
  )
}