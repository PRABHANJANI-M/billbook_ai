import { HandCoins } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import Badge from '../../../components/common/Badge'
import { paymentReportRows, salesPurchaseReportTabs } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

export default function PaymentReport() {
  return (
    <div>
      <PageHeader icon={HandCoins} title="Payment Report" />
      <ReportTabs tabs={salesPurchaseReportTabs} />
      <ReportFilterBar />
      <DataTable
        columns={[
          { key: 'reference', label: 'Reference' },
          { key: 'date', label: 'Date' },
          { key: 'party', label: 'Party' },
          { key: 'type', label: 'Type', render: (r) => <Badge color={r.type === 'Received' ? 'green' : 'red'}>{r.type}</Badge> },
          { key: 'mode', label: 'Mode' },
          { key: 'amount', label: 'Amount', render: (r) => formatCurrency(r.amount) },
        ]}
        data={paymentReportRows}
      />
    </div>
  )
}