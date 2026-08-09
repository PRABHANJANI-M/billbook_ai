import { FileSpreadsheet, Download } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import StatCard from '../../components/common/StatCard'
import { gstr1Data } from '../../data/sampleGST'
import { formatCurrency } from '../../utils/format'

export default function GSTR1() {
  return (
    <div>
      <PageHeader
        icon={FileSpreadsheet}
        title={`GSTR-1 — ${gstr1Data.period}`}
        actions={<Button><span className="flex items-center gap-1"><Download size={15} /> Export JSON</span></Button>}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <StatCard label="B2B Invoices" value={gstr1Data.b2b.invoices} />
        <StatCard label="B2C Invoices" value={gstr1Data.b2c.invoices} />
        <StatCard label="Taxable Value" value={formatCurrency(gstr1Data.b2b.taxableValue + gstr1Data.b2c.taxableValue)} />
        <StatCard label="Total Tax" value={formatCurrency(gstr1Data.b2b.cgst + gstr1Data.b2b.sgst + gstr1Data.b2c.cgst + gstr1Data.b2c.sgst)} accent="blue" />
      </div>

      <h3 className="text-sm font-semibold text-gray-700 mb-2">HSN Summary</h3>
      <DataTable
        columns={[
          { key: 'hsn', label: 'HSN Code' },
          { key: 'description', label: 'Description' },
          { key: 'taxableValue', label: 'Taxable Value', render: (r) => formatCurrency(r.taxableValue) },
          { key: 'taxRate', label: 'Rate', render: (r) => `${r.taxRate}%` },
          { key: 'taxAmount', label: 'Tax Amount', render: (r) => formatCurrency(r.taxAmount) },
        ]}
        data={gstr1Data.hsn}
      />
    </div>
  )
}