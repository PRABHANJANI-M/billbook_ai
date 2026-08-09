import { Percent, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { discounts } from '../../data/sampleSales'

export default function Discounts() {
  return (
    <div>
      <PageHeader icon={Percent} title="Discounts" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> New Discount</span></Button>} />
      <DataTable
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'type', label: 'Type' },
          { key: 'value', label: 'Value', render: (r) => r.type === 'Percentage' ? `${r.value}%` : `₹${r.value}` },
          { key: 'appliesTo', label: 'Applies To' },
          { key: 'validTill', label: 'Valid Till' },
          { key: 'active', label: 'Status', render: (r) => <Badge color={r.active ? 'green' : 'gray'}>{r.active ? 'Active' : 'Expired'}</Badge> },
        ]}
        data={discounts}
      />
    </div>
  )
}