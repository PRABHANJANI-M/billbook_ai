import { Activity } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import Badge from '../../../components/common/Badge'
import { stockMovementLog, inventoryReportTabs } from '../../../data/sampleReports'

const typeColor = { IN: 'green', OUT: 'red', ADJUSTMENT: 'yellow' }

export default function StockMovement() {
  return (
    <div>
      <PageHeader icon={Activity} title="Stock Movement" />
      <ReportTabs tabs={inventoryReportTabs} />
      <ReportFilterBar />
      <DataTable
        columns={[
          { key: 'date', label: 'Date' },
          { key: 'product', label: 'Product' },
          { key: 'type', label: 'Type', render: (r) => <Badge color={typeColor[r.type]}>{r.type}</Badge> },
          { key: 'qty', label: 'Qty' },
          { key: 'reference', label: 'Reference' },
          { key: 'balance', label: 'Balance' },
        ]}
        data={stockMovementLog}
      />
    </div>
  )
}