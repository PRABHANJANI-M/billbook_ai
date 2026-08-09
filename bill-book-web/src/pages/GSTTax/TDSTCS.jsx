import { Landmark, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { tdsTcsEntries } from '../../data/sampleGST'
import { formatCurrency } from '../../utils/format'

export default function TDSTCS() {
  return (
    <div>
      <PageHeader icon={Landmark} title="TDS / TCS" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> Add Entry</span></Button>} />
      <DataTable
        columns={[
          { key: 'type', label: 'Type', render: (r) => <Badge color={r.type === 'TDS' ? 'purple' : 'blue'}>{r.type}</Badge> },
          { key: 'section', label: 'Section' },
          { key: 'party', label: 'Party' },
          { key: 'amount', label: 'Amount', render: (r) => formatCurrency(r.amount) },
          { key: 'date', label: 'Date' },
          { key: 'status', label: 'Status', render: (r) => <Badge color={r.status === 'Deposited' ? 'green' : 'yellow'}>{r.status}</Badge> },
        ]}
        data={tdsTcsEntries}
      />
    </div>
  )
}