import { FileClock } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import { balanceSheetData } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

function Section({ title, rows, color }) {
  const total = rows.reduce((s, r) => s + r.amount, 0)
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className={`px-4 py-3 border-b border-gray-100 font-semibold text-sm ${color}`}>{title}</div>
      <div className="divide-y divide-gray-50">
        {rows.map((r) => (
          <div key={r.label} className="flex justify-between px-4 py-2 text-sm text-gray-600">
            <span>{r.label}</span>
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

export default function BalanceSheet() {
  const totalAssets = balanceSheetData.assets.reduce((s, r) => s + r.amount, 0)
  const totalLiabilities = balanceSheetData.liabilities.reduce((s, r) => s + r.amount, 0)
  const totalEquity = balanceSheetData.equity.reduce((s, r) => s + r.amount, 0)

  return (
    <div>
      <PageHeader icon={FileClock} title={`Balance Sheet — as of ${balanceSheetData.asOf}`} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <Section title="Assets" rows={balanceSheetData.assets} color="text-green-600" />
        <Section title="Liabilities" rows={balanceSheetData.liabilities} color="text-red-500" />
        <Section title="Equity" rows={balanceSheetData.equity} color="text-indigo-600" />
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between text-sm font-semibold max-w-md">
        <span>Total Liabilities + Equity</span>
        <span>{formatCurrency(totalLiabilities + totalEquity)}</span>
      </div>
      {Math.abs(totalAssets - (totalLiabilities + totalEquity)) > 0.01 && (
        <p className="text-xs text-yellow-600 mt-2">Note: sample figures don't balance exactly — illustrative data only.</p>
      )}
    </div>
  )
}