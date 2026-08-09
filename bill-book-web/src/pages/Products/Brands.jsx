import { Tag, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { brands } from '../../data/sampleProducts'

export default function Brands() {
  return (
    <div>
      <PageHeader icon={Tag} title="Brands" actions={<Button><span className="flex items-center gap-1"><Plus size={15}/> Add Brand</span></Button>} />
      <DataTable
        columns={[
          { key: 'name', label: 'Brand Name' },
          { key: 'productCount', label: 'Products' },
        ]}
        data={brands}
      />
    </div>
  )
}