import { AlertTriangle } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import Badge from '../../../components/common/Badge'
import { lowStockReport, inventoryReportTabs } from '../../../data/sampleReports'

export default function LowStock() {
  return (
    <div>
      <PageHeader icon={AlertTriangle} title="Low Stock" />
      <ReportTabs tabs={inventoryReportTabs} />
      <ReportFilterBar />
      <DataTable
        columns={[
          { key: 'sku', label: 'SKU' },
          { key: 'name', label: 'Product' },
          { key: 'category', label: 'Category' },
          { key: 'stock', label: 'Stock', render: (r) => <Badge color="yellow">{r.stock}</Badge> },
          { key: 'alertQty', label: 'Alert Qty' },
        ]}
        data={lowStockReport}
        emptyText="No low-stock products."
      />
    </div>
  )
}