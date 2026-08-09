import { HandCoins, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { receivedPayments } from '../../data/sampleSales'
import { formatCurrency } from '../../utils/format'

export default function ReceivePayments() {
  return (
    <div>
      <PageHeader icon={HandCoins} title="Receive Payments" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> Record Payment</span></Button>} />
      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'invoice', label: 'Invoice' },
          { key: 'customer', label: 'Customer' },
          { key: 'amount', label: 'Amount', render: (r) => formatCurrency(r.amount) },
          { key: 'mode', label: 'Mode' },
          { key: 'date', label: 'Date' },
        ]}
        data={receivedPayments}
      />
    </div>
  )
}