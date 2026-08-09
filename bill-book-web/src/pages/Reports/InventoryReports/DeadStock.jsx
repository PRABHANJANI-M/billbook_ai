import { PackageX } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import Badge from '../../../components/common/Badge'
import { deadStockReport, inventoryReportTabs } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

export default function DeadStock() {
  return (
    <div>
      <PageHeader icon={PackageX} title="Dead Stock" />
      <ReportTabs tabs={inventoryReportTabs} />
      <ReportFilterBar />
      <DataTable
        columns={[
          { key: 'sku', label: 'SKU' },
          { key: 'name', label: 'Product' },
          { key: 'stock', label: 'Stock' },
          { key: 'valuation', label: 'Valuation', render: (r) => formatCurrency(r.valuation) },
          { key: 'lastMovementDate', label: 'Last Movement' },
          { key: 'daysSinceMovement', label: 'Days Idle', render: (r) => <Badge color="red">{r.daysSinceMovement}d</Badge> },
        ]}
        data={deadStockReport}
      />
    </div>
  )
}