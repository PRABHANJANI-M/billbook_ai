import { ListTree, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import { categories } from '../../data/sampleProducts'

export default function Categories() {
  return (
    <div>
      <PageHeader icon={ListTree} title="Categories" actions={<Button><span className="flex items-center gap-1"><Plus size={15}/> Add Category</span></Button>} />
      <DataTable
        columns={[
          { key: 'name', label: 'Category Name' },
          { key: 'productCount', label: 'Products' },
        ]}
        data={categories}
      />
    </div>
  )
}