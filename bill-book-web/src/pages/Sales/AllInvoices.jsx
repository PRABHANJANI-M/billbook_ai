import { ReceiptText, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { useData } from '../../context/DataContext'
import { formatCurrency } from '../../utils/format'

export default function AllInvoices() {
  const navigate = useNavigate()
  const { invoices } = useData()
  const statusColor = { Paid: 'green', Partial: 'yellow', Unpaid: 'red' }
  return (
    <div>
      <PageHeader
        icon={ReceiptText}
        title="All Invoices"
        actions={<Button onClick={() => navigate('/sales/invoices/new')}><span className="flex items-center gap-1"><Plus size={15} /> New Invoice</span></Button>}
      />
      <DataTable
        columns={[
          { key: 'ref', label: 'Invoice #' },
          { key: 'date', label: 'Date' },
          { key: 'customer', label: 'Customer' },
          { key: 'total', label: 'Total', render: (r) => formatCurrency(r.total) },
          { key: 'paid', label: 'Paid', render: (r) => formatCurrency(r.paid) },
          { key: 'due', label: 'Due', render: (r) => formatCurrency(r.due) },
          { key: 'status', label: 'Status', render: (r) => <Badge color={statusColor[r.status]}>{r.status}</Badge> },
        ]}
        data={invoices}
      />
    </div>
  )
}