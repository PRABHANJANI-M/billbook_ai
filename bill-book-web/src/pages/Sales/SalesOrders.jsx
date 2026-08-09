import { FileText, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { salesOrders } from '../../data/sampleSales'
import { formatCurrency } from '../../utils/format'

export default function SalesOrders() {
  const navigate = useNavigate()
  return (
    <div>
      <PageHeader
        icon={FileText}
        title="Sales Orders"
        actions={<Button onClick={() => navigate('/sales/orders/new')}><span className="flex items-center gap-1"><Plus size={15} /> New Sales Order</span></Button>}
      />
      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'date', label: 'Date' },
          { key: 'customer', label: 'Customer' },
          { key: 'total', label: 'Total', render: (r) => formatCurrency(r.total) },
          { key: 'status', label: 'Status', render: (r) => <Badge color={r.status === 'Confirmed' ? 'green' : 'yellow'}>{r.status}</Badge> },
        ]}
        data={salesOrders}
      />
    </div>
  )
}