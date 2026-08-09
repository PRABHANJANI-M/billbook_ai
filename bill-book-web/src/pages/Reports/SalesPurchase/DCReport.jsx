import { Truck } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import Badge from '../../../components/common/Badge'
import { dcReportRows, salesPurchaseReportTabs } from '../../../data/sampleReports'

const statusColor = { Delivered: 'green', 'In Transit': 'blue', Draft: 'yellow' }

export default function DCReport() {
  return (
    <div>
      <PageHeader icon={Truck} title="DC Report" />
      <ReportTabs tabs={salesPurchaseReportTabs} />
      <ReportFilterBar />
      <DataTable
        columns={[
          { key: 'dcNumber', label: 'DC Number' },
          { key: 'date', label: 'Date' },
          { key: 'customer', label: 'Customer' },
          { key: 'items', label: 'Items' },
          { key: 'status', label: 'Status', render: (r) => <Badge color={statusColor[r.status]}>{r.status}</Badge> },
        ]}
        data={dcReportRows}
      />
    </div>
  )
}