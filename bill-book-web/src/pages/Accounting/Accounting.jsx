import { Building2 } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import { accountingLedger } from '../../data/sampleBank'
import { formatCurrency } from '../../utils/format'

export default function Accounting() {
  return (
    <div>
      <PageHeader icon={Building2} title="Accounting — General Ledger" />
      <DataTable
        columns={[
          { key: 'account', label: 'Account' },
          { key: 'debit', label: 'Debit', render: (r) => r.debit ? formatCurrency(r.debit) : '-' },
          { key: 'credit', label: 'Credit', render: (r) => r.credit ? formatCurrency(r.credit) : '-' },
          { key: 'date', label: 'Date' },
        ]}
        data={accountingLedger}
      />
    </div>
  )
}