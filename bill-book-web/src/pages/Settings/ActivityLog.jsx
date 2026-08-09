import { History } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import { activityLog } from '../../data/sampleSettings'

export default function ActivityLog() {
  return (
    <div>
      <PageHeader icon={History} title="Activity Log" />
      <DataTable
        columns={[
          { key: 'user', label: 'User' },
          { key: 'action', label: 'Action' },
          { key: 'timestamp', label: 'Timestamp' },
        ]}
        data={activityLog}
      />
    </div>
  )
}