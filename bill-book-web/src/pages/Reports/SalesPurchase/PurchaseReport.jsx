import { FileBarChart } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import Badge from '../../../components/common/Badge'
import StatCard from '../../../components/common/StatCard'
import { purchaseReportRows, purchaseReportStats, salesPurchaseReportTabs } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

const statusColor = { Paid: 'green', Partial: 'yellow', Unpaid: 'red' }

export default function PurchaseReport() {
  return (
    <div>
      <PageHeader icon={FileBarChart} title="Purchase Report" />
      <ReportTabs tabs={salesPurchaseReportTabs} />
      <ReportFilterBar />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <StatCard label="Total Purchases" value={formatCurrency(purchaseReportStats.totalPurchases)} />
        <StatCard label="Paid" value={formatCurrency(purchaseReportStats.totalPaid)} accent="green" />
        <StatCard label="Due" value={formatCurrency(purchaseReportStats.totalDue)} accent="red" />
        <StatCard label="Invoices" value={purchaseReportStats.invoiceCount} accent="blue" />
      </div>

      <DataTable
        columns={[
          { key: 'reference', label: 'Reference' },
          { key: 'date', label: 'Date' },
          { key: 'supplier', label: 'Supplier' },
          { key: 'total', label: 'Total', render: (r) => formatCurrency(r.total) },
          { key: 'paid', label: 'Paid', render: (r) => formatCurrency(r.paid) },
          { key: 'due', label: 'Due', render: (r) => formatCurrency(r.due) },
          { key: 'status', label: 'Status', render: (r) => <Badge color={statusColor[r.status]}>{r.status}</Badge> },
        ]}
        data={purchaseReportRows}
      />
    </div>
  )
}