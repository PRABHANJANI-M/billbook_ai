import { Wallet } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import StatCard from '../../../components/common/StatCard'
import { expenseReportRows, salesPurchaseReportTabs } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

export default function ExpenseReport() {
  const total = expenseReportRows.reduce((s, r) => s + r.amount, 0)
  return (
    <div>
      <PageHeader icon={Wallet} title="Expense Report" />
      <ReportTabs tabs={salesPurchaseReportTabs} />
      <ReportFilterBar />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
        <StatCard label="Total Expenses" value={formatCurrency(total)} accent="red" />
        <StatCard label="Entries" value={expenseReportRows.length} />
        <StatCard label="Categories" value={new Set(expenseReportRows.map((r) => r.category)).size} accent="blue" />
      </div>

      <DataTable
        columns={[
          { key: 'category', label: 'Category' },
          { key: 'description', label: 'Description' },
          { key: 'amount', label: 'Amount', render: (r) => formatCurrency(r.amount) },
          { key: 'paidVia', label: 'Paid Via' },
          { key: 'date', label: 'Date' },
        ]}
        data={expenseReportRows}
      />
    </div>
  )
}