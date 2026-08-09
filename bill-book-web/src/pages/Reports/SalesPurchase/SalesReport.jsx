import { TrendingUp } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import Badge from '../../../components/common/Badge'
import StatCard from '../../../components/common/StatCard'
import { salesReportRows, salesPurchaseReportTabs } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

const statusColor = { Paid: 'green', Partial: 'yellow', Unpaid: 'red' }

export default function SalesReport() {
  const total = salesReportRows.reduce((s, r) => s + r.total, 0)
  const paid = salesReportRows.reduce((s, r) => s + r.paid, 0)
  const due = salesReportRows.reduce((s, r) => s + r.due, 0)

  return (
    <div>
      <PageHeader icon={TrendingUp} title="Sales Report" />
      <ReportTabs tabs={salesPurchaseReportTabs} />
      <ReportFilterBar />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <StatCard label="Total Sales" value={formatCurrency(total)} />
        <StatCard label="Paid" value={formatCurrency(paid)} accent="green" />
        <StatCard label="Due" value={formatCurrency(due)} accent="red" />
        <StatCard label="Invoices" value={salesReportRows.length} accent="blue" />
      </div>

      <DataTable
        columns={[
          { key: 'reference', label: 'Reference' },
          { key: 'date', label: 'Date' },
          { key: 'party', label: 'Customer' },
          { key: 'total', label: 'Total', render: (r) => formatCurrency(r.total) },
          { key: 'paid', label: 'Paid', render: (r) => formatCurrency(r.paid) },
          { key: 'due', label: 'Due', render: (r) => formatCurrency(r.due) },
          { key: 'status', label: 'Status', render: (r) => <Badge color={statusColor[r.status]}>{r.status}</Badge> },
        ]}
        data={salesReportRows}
      />
    </div>
  )
}