import { useState } from 'react'
import { Wallet, Plus } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Button from '../../components/common/Button'
import StatCard from '../../components/common/StatCard'
import { expenses } from '../../data/sampleExpenses'
import { formatCurrency } from '../../utils/format'

export default function Expenses() {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0)
  return (
    <div>
      <PageHeader icon={Wallet} title="Expenses" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> Add Expense</span></Button>} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <StatCard label="Total Expenses" value={formatCurrency(total)} accent="red" />
        <StatCard label="This Month" value={formatCurrency(total)} />
        <StatCard label="Categories" value="6" />
        <StatCard label="Entries" value={expenses.length} />
      </div>

      <DataTable
        columns={[
          { key: 'ref', label: 'Reference' },
          { key: 'category', label: 'Category' },
          { key: 'description', label: 'Description' },
          { key: 'amount', label: 'Amount', render: (r) => formatCurrency(r.amount) },
          { key: 'paidVia', label: 'Paid Via' },
          { key: 'date', label: 'Date' },
        ]}
        data={expenses}
      />
    </div>
  )
}