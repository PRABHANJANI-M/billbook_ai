import { RotateCcw, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { purchaseReturns } from '../../data/samplePurchases'
import { formatCurrency } from '../../utils/format'

export default function PurchaseReturns() {
  return (
    <div>
      <PageHeader icon={RotateCcw} title="Purchase Returns" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> New Return</span></Button>} />
      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'originalPurchase', label: 'Original Purchase' },
          { key: 'date', label: 'Date' },
          { key: 'supplier', label: 'Supplier' },
          { key: 'amount', label: 'Amount', render: (r) => formatCurrency(r.amount) },
          { key: 'reason', label: 'Reason' },
        ]}
        data={purchaseReturns}
      />
    </div>
  )
}