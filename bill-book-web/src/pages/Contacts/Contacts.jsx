import { useState, useMemo } from 'react'
import { Users, Plus, Search } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { contacts } from '../../data/sampleContacts'
import { formatCurrency } from '../../utils/format'

export default function Contacts() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(
    () => contacts.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  )

  return (
    <div>
      <PageHeader icon={Users} title="Contacts" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> Add Contact</span></Button>} />

      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 mb-4 max-w-sm">
        <Search size={15} className="text-gray-400" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search contacts..." className="outline-none text-sm flex-1" />
      </div>

      <DataTable
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'type', label: 'Type', render: (r) => <Badge color={r.type === 'Supplier' ? 'purple' : 'blue'}>{r.type}</Badge> },
          { key: 'phone', label: 'Phone' },
          { key: 'email', label: 'Email' },
          { key: 'gstin', label: 'GSTIN' },
          { key: 'balance', label: 'Balance', render: (r) => (
            <span className={r.balance < 0 ? 'text-red-500' : 'text-gray-700'}>{formatCurrency(r.balance)}</span>
          )},
        ]}
        data={filtered}
      />
    </div>
  )
}   