import { PackageX } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { dcReturns } from '../../data/sampleSales'

export default function DCReturns() {
  return (
    <div>
      <PageHeader icon={PackageX} title="DC Returns" actions={<Button>+ New DC Return</Button>} />
      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'originalDC', label: 'Original DC' },
          { key: 'date', label: 'Date' },
          { key: 'customer', label: 'Customer' },
        ]}
        data={dcReturns}
      />
    </div>
  )
}