import { PackagePlus, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { openingStockEntries } from '../../data/sampleStock'
import { formatCurrency } from '../../utils/format'

export default function OpeningStock() {
  return (
    <div>
      <PageHeader
        icon={PackagePlus}
        title="Opening Stock"
        actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> Add Entry</span></Button>}
      />
      <DataTable
        columns={[
          { key: 'product', label: 'Product' },
          { key: 'sku', label: 'SKU' },
          { key: 'qty', label: 'Qty' },
          { key: 'unitCost', label: 'Unit Cost', render: (r) => formatCurrency(r.unitCost) },
          { key: 'date', label: 'Date' },
          { key: 'store', label: 'Store' },
        ]}
        data={openingStockEntries}
      />
    </div>
  )
}