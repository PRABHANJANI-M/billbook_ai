import { Store, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { stores } from '../../data/sampleSettings'

export default function Stores() {
  return (
    <div>
      <PageHeader icon={Store} title="Stores" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> Add Store</span></Button>} />
      <DataTable
        columns={[
          { key: 'name', label: 'Store Name' },
          { key: 'address', label: 'Address' },
          { key: 'phone', label: 'Phone' },
          { key: 'active', label: 'Status', render: (r) => <Badge color={r.active ? 'green' : 'gray'}>{r.active ? 'Active' : 'Inactive'}</Badge> },
        ]}
        data={stores}
      />
    </div>
  )
}