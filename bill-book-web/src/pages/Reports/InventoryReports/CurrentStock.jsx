import { Boxes } from 'lucide-react'
import PageHeader from '../../../components/common/PageHeader'
import ReportTabs from '../../../components/common/ReportTabs'
import ReportFilterBar from '../../../components/common/ReportFilterBar'
import DataTable from '../../../components/common/DataTable'
import { currentStockReport, inventoryReportTabs } from '../../../data/sampleReports'
import { formatCurrency } from '../../../utils/format'

export default function CurrentStock() {
  return (
    <div>
      <PageHeader icon={Boxes} title="Current Stock" />
      <ReportTabs tabs={inventoryReportTabs} />
      <ReportFilterBar />
      <DataTable
        columns={[
          { key: 'sku', label: 'SKU' },
          { key: 'name', label: 'Product' },
          { key: 'category', label: 'Category' },
          { key: 'stock', label: 'Stock' },
          { key: 'unit', label: 'Unit' },
          { key: 'valuation', label: 'Valuation', render: (r) => formatCurrency(r.valuation) },
        ]}
        data={currentStockReport}
      />
    </div>
  )
}