import { Factory, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { manufacturers } from '../../data/sampleProducts'

export default function Manufacturers() {
  return (
    <div>
      <PageHeader icon={Factory} title="Manufacturers" actions={<Button><span className="flex items-center gap-1"><Plus size={15}/> Add Manufacturer</span></Button>} />
      <DataTable
        columns={[
          { key: 'name', label: 'Manufacturer' },
          { key: 'country', label: 'Country' },
        ]}
        data={manufacturers}
      />
    </div>
  )
}