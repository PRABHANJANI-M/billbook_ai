import { FileSpreadsheet, Download } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/common/Button'
import { gstr3bData } from '../../data/sampleGST'
import { formatCurrency } from '../../utils/format'

export default function GSTR3B() {
  const rows = [
    { label: 'Outward Taxable Supplies', value: gstr3bData.outwardTaxable },
    { label: 'Output Tax Liability', value: gstr3bData.outwardTax },
    { label: 'Inward Taxable Supplies', value: gstr3bData.inwardTaxable },
    { label: 'Input Tax Credit (ITC) Available', value: gstr3bData.itcAvailable },
    { label: 'Net Tax Payable', value: gstr3bData.netTaxPayable, highlight: true },
  ]

  return (
    <div>
      <PageHeader
        icon={FileSpreadsheet}
        title={`GSTR-3B — ${gstr3bData.period}`}
        actions={<Button><span className="flex items-center gap-1"><Download size={15} /> Export</span></Button>}
      />
      <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-2xl flex flex-col divide-y divide-gray-100">
        {rows.map((r) => (
          <div key={r.label} className={`flex justify-between py-3 ${r.highlight ? 'font-bold text-indigo-600' : 'text-gray-700'}`}>
            <span className={r.highlight ? '' : 'text-gray-500'}>{r.label}</span>
            <span>{formatCurrency(r.value)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}