import { Zap } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import Badge from '../../../components/common/Badge'
import { fastMovingItems, slowMovingItems, inventoryReportTabs } from '../../../data/sampleReports'

export default function FastSlowItems() {
  return (
    <div>
      <PageHeader icon={Zap} title="Fast / Slow Moving Items" />
      <ReportTabs tabs={inventoryReportTabs} />
      <ReportFilterBar />

      <h3 className="text-sm font-semibold text-gray-700 mb-2">Fast Moving</h3>
      <div className="mb-6">
        <DataTable
          columns={[
            { key: 'sku', label: 'SKU' },
            { key: 'name', label: 'Product' },
            { key: 'unitsSoldLast30Days', label: 'Units Sold (30d)' },
            { key: 'velocity', label: 'Velocity', render: () => <Badge color="green">Fast</Badge> },
          ]}
          data={fastMovingItems}
        />
      </div>

      <h3 className="text-sm font-semibold text-gray-700 mb-2">Slow Moving</h3>
      <DataTable
        columns={[
          { key: 'sku', label: 'SKU' },
          { key: 'name', label: 'Product' },
          { key: 'unitsSoldLast30Days', label: 'Units Sold (30d)' },
          { key: 'velocity', label: 'Velocity', render: () => <Badge color="yellow">Slow</Badge> },
        ]}
        data={slowMovingItems}
      />
    </div>
  )
}