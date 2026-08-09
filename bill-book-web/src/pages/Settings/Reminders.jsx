import { Bell, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { reminders } from '../../data/sampleSettings'

const priorityColor = { High: 'red', Medium: 'yellow', Low: 'blue' }

export default function Reminders() {
  return (
    <div>
      <PageHeader icon={Bell} title="Reminders" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> Add Reminder</span></Button>} />
      <DataTable
        columns={[
          { key: 'title', label: 'Title' },
          { key: 'dueDate', label: 'Due Date' },
          { key: 'priority', label: 'Priority', render: (r) => <Badge color={priorityColor[r.priority]}>{r.priority}</Badge> },
          { key: 'status', label: 'Status', render: (r) => <Badge color={r.status === 'Done' ? 'green' : 'gray'}>{r.status}</Badge> },
        ]}
        data={reminders}
      />
    </div>
  )
}