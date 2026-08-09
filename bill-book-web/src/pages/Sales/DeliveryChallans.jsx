import { Truck, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { deliveryChallans } from '../../data/sampleSales'

export default function DeliveryChallans() {
  const navigate = useNavigate()
  const statusColor = { Delivered: 'green', 'In Transit': 'blue', Draft: 'yellow' }
  return (
    <div>
      <PageHeader
        icon={Truck}
        title="Delivery Challans"
        actions={<Button onClick={() => navigate('/sales/challans/new')}><span className="flex items-center gap-1"><Plus size={15} /> New Challan</span></Button>}
      />
      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'date', label: 'Date' },
          { key: 'customer', label: 'Customer' },
          { key: 'status', label: 'Status', render: (r) => <Badge color={statusColor[r.status]}>{r.status}</Badge> },
          { key: 'ewb', label: 'E-Way Bill' },
        ]}
        data={deliveryChallans}
      />
    </div>
  )
}