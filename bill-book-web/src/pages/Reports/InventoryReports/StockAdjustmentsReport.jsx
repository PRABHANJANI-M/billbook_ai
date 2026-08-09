import { Sliders } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import Badge from '../../../components/common/Badge'
import { stockAdjustments } from '../../../data/sampleStock'
import { inventoryReportTabs } from '../../../data/sampleReports'

export default function StockAdjustmentsReport() {
  return (
    <div>
      <PageHeader icon={Sliders} title="Stock Adjustments Report" />
      <ReportTabs tabs={inventoryReportTabs} />
      <ReportFilterBar />
      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'product', label: 'Product' },
          { key: 'type', label: 'Type', render: (r) => <Badge color={r.type === 'Add' ? 'green' : 'red'}>{r.type}</Badge> },
          { key: 'qty', label: 'Qty' },
          { key: 'reason', label: 'Reason' },
          { key: 'date', label: 'Date' },
          { key: 'by', label: 'By' },
        ]}
        data={stockAdjustments}
      />
    </div>
  )
}