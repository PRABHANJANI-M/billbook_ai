import { DollarSign } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { suppliersToPay } from '../../data/samplePurchases'
import { formatCurrency } from '../../utils/format'

export default function PaySuppliers() {
  return (
    <div>
      <PageHeader icon={DollarSign} title="Pay Suppliers" />
      <DataTable
        columns={[
          { key: 'supplier', label: 'Supplier' },
          { key: 'due', label: 'Due Amount', render: (r) => <span className="text-red-500 font-medium">{formatCurrency(r.due)}</span> },
          { key: 'lastPurchase', label: 'Last Purchase' },
          { key: 'action', label: 'Action', render: () => <Button className="!py-1 !px-3 text-xs">Pay Now</Button> },
        ]}
        data={suppliersToPay}
      />
    </div>
  )
}