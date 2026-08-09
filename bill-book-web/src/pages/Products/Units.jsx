import { Ruler, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { units } from '../../data/sampleProducts'

export default function Units() {
  return (
    <div>
      <PageHeader icon={Ruler} title="Units" actions={<Button><span className="flex items-center gap-1"><Plus size={15}/> Add Unit</span></Button>} />
      <DataTable
        columns={[
          { key: 'name', label: 'Unit Name' },
          { key: 'short', label: 'Short Code' },
        ]}
        data={units}
      />
    </div>
  )
}