import { DollarSign } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import StatCard from '../../../components/common/StatCard'
import { cashFlowData } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

function MiniTable({ title, rows }) {
  const total = rows.reduce((s, r) => s + r.amount, 0)
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 font-semibold text-sm text-gray-700">{title}</div>
      <div className="divide-y divide-gray-50">
        {rows.map((r, i) => (
          <div key={i} className="flex justify-between px-4 py-2 text-sm text-gray-600">
            <span>{r.source}</span>
            <span>{formatCurrency(r.amount)}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-4 py-2.5 border-t border-gray-100 font-bold text-sm bg-gray-50">
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>
    </div>
  )
}

export default function CashFlowStatement() {
  const positive = cashFlowData.netCashFlow >= 0
  return (
    <div>
      <PageHeader icon={DollarSign} title="Cash Flow Statement" />
      <ReportFilterBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <StatCard label="Total Cash In" value={formatCurrency(cashFlowData.totalCashIn)} accent="green" />
        <StatCard label="Total Cash Out" value={formatCurrency(cashFlowData.totalCashOut)} accent="red" />
        <StatCard
          label="Net Cash Flow"
          value={`${formatCurrency(cashFlowData.netCashFlow)} ${positive ? '(positive)' : '(negative)'}`}
          accent={positive ? 'green' : 'red'}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MiniTable title="Cash Inflows" rows={cashFlowData.cashInflows} />
        <MiniTable title="Purchase Payments" rows={cashFlowData.purchasePayments} />
        <MiniTable title="Expenses" rows={cashFlowData.expensePayments} />
      </div>
    </div>
  )
}