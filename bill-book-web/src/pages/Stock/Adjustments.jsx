import { PackageMinus, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { stockAdjustments } from '../../data/sampleStock'

export default function Adjustments() {
  return (
    <div>
      <PageHeader
        icon={PackageMinus}
        title="Stock Adjustments"
        actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> New Adjustment</span></Button>}
      />
      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'product', label: 'Product' },
          { key: 'type', label: 'Type', render: (r) => <Badge color={r.type === 'Add' ? 'green' : 'red'}>{r.type}</Badge> },
          { key: 'qty', label: 'Qty' },
          { key: 'reason', label: 'Reason' },
          { key: 'date', label: 'Date' },
          { key: 'by', label: 'By' },
        ]}
        data={stockAdjustments}
      />
    </div>
  )
}