import { Undo2, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { saleReturns } from '../../data/sampleSales'
import { formatCurrency } from '../../utils/format'

export default function SaleReturns() {
  return (
    <div>
      <PageHeader icon={Undo2} title="Sale Returns" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> New Return</span></Button>} />
      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'originalInvoice', label: 'Original Invoice' },
          { key: 'date', label: 'Date' },
          { key: 'customer', label: 'Customer' },
          { key: 'amount', label: 'Amount', render: (r) => formatCurrency(r.amount) },
          { key: 'reason', label: 'Reason' },
        ]}
        data={saleReturns}
      />
    </div>
  )
}