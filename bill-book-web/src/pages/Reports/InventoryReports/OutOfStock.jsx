import { XCircle } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import Badge from '../../../components/common/Badge'
import { outOfStockReport, inventoryReportTabs } from '../../../data/sampleReports'

export default function OutOfStock() {
  return (
    <div>
      <PageHeader icon={XCircle} title="Out of Stock" />
      <ReportTabs tabs={inventoryReportTabs} />
      <ReportFilterBar />
      <DataTable
        columns={[
          { key: 'sku', label: 'SKU' },
          { key: 'name', label: 'Product' },
          { key: 'category', label: 'Category' },
          { key: 'stock', label: 'Stock', render: () => <Badge color="red">0</Badge> },
        ]}
        data={outOfStockReport}
        emptyText="No out-of-stock products."
      />
    </div>
  )
}