    import { Users, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { staff } from '../../data/sampleStaff'

const roleColor = { 'Super Admin': 'purple', Manager: 'blue', Accountant: 'yellow', Cashier: 'green' }

export default function StaffHR() {
  return (
    <div>
      <PageHeader icon={Users} title="Staff / HR" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> Add Staff</span></Button>} />
      <DataTable
        columns={[
          { key: 'id', label: '#' },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role', render: (r) => <Badge color={roleColor[r.role] || 'gray'}>{r.role}</Badge> },
          { key: 'store', label: 'Store' },
          { key: 'department', label: 'Department' },
          { key: 'status', label: 'Status', render: (r) => <Badge color="green">{r.status}</Badge> },
        ]}
        data={staff}
      />
    </div>
  )
}