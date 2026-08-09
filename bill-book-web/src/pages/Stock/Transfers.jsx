import { ArrowLeftRight } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { stockTransfers } from '../../data/sampleStock'

export default function Transfers() {
  return (
    <div>
      <PageHeader icon={ArrowLeftRight} title="Stock Transfers" actions={<Button>+ New Transfer</Button>} />
      <DataTable
        columns={[
          { key: 'reference', label: 'Reference' },
          { key: 'date', label: 'Date' },
          { key: 'from', label: 'From' },
          { key: 'to', label: 'To' },
          { key: 'by', label: 'By' },
        ]}
        data={stockTransfers}
        emptyText="No transfers."
      />
    </div>
  )
}