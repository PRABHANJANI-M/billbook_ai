import { BookOpen, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { taxProfiles } from '../../data/sampleGST'

export default function TaxProfiles() {
  return (
    <div>
      <PageHeader icon={BookOpen} title="Tax Profiles" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> Add Profile</span></Button>} />
      <DataTable
        columns={[
          { key: 'name', label: 'Profile Name' },
          { key: 'rate', label: 'Rate', render: (r) => <Badge color="blue">{r.rate}%</Badge> },
          { key: 'type', label: 'Type' },
          { key: 'appliesTo', label: 'Applies To' },
        ]}
        data={taxProfiles}
      />
    </div>
  )
}