import { ClipboardList, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { purchaseOrders } from '../../data/samplePurchases'
import { formatCurrency } from '../../utils/format'

export default function PurchaseOrders() {
  const navigate = useNavigate()
  return (
    <div>
      <PageHeader
        icon={ClipboardList}
        title="Purchase Orders"
        actions={<Button onClick={() => navigate('/purchases/orders/new')}><span className="flex items-center gap-1"><Plus size={15} /> New PO</span></Button>}
      />
      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'date', label: 'Date' },
          { key: 'supplier', label: 'Supplier' },
          { key: 'total', label: 'Total', render: (r) => formatCurrency(r.total) },
          { key: 'status', label: 'Status', render: (r) => <Badge color={r.status === 'Confirmed' ? 'green' : 'yellow'}>{r.status}</Badge> },
        ]}
        data={purchaseOrders}
      />
    </div>
  )
}