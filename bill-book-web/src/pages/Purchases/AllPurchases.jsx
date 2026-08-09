import { ShoppingBag, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { purchases } from '../../data/samplePurchases'
import { formatCurrency } from '../../utils/format'

export default function AllPurchases() {
  const navigate = useNavigate()
  const statusColor = { Paid: 'green', Partial: 'yellow', Unpaid: 'red' }
  return (
    <div>
      <PageHeader
        icon={ShoppingBag}
        title="Purchases"
        actions={<Button onClick={() => navigate('/purchases/new')}><span className="flex items-center gap-1"><Plus size={15} /> New Purchase</span></Button>}
      />
      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'date', label: 'Date' },
          { key: 'supplier', label: 'Supplier' },
          { key: 'store', label: 'Store' },
          { key: 'total', label: 'Total', render: (r) => formatCurrency(r.total) },
          { key: 'status', label: 'Status', render: (r) => <Badge color={statusColor[r.status]}>{r.status}</Badge> },
        ]}
        data={purchases}
      />
    </div>
  )
}