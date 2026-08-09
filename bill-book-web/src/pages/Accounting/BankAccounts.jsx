import { useState } from 'react'
import { Landmark, Plus, ListChecks, CheckSquare } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/common/Button'
import DataTable from '../../components/common/DataTable'
import Badge from '../../components/common/Badge'
import { bankAccounts, bankTransactions } from '../../data/sampleBank'
import { formatCurrency } from '../../utils/format'

export default function BankAccounts() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <PageHeader icon={Landmark} title="Bank Accounts" actions={<Button><span className="flex items-center gap-1"><Plus size={15} /> Add Account</span></Button>} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {bankAccounts.map((acc) => (
          <div key={acc.id} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-gray-800">{acc.holder}</div>
                <div className="text-xs text-gray-500">{acc.bank} · {acc.accountNumber}</div>
              </div>
              <Badge color="blue">{acc.type}</Badge>
            </div>
            <div className="text-xs text-gray-400">IFSC: {acc.ifsc}</div>
            <div>
              <div className="text-xs text-gray-500">Current Balance</div>
              <div className="text-xl font-bold text-gray-800">{formatCurrency(acc.balance)}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setSelected(acc.id)} className="flex-1 border border-gray-200 rounded-lg py-1.5 text-xs flex items-center justify-center gap-1">
                <ListChecks size={13} /> Transactions
              </button>
              <button className="flex-1 border border-gray-200 rounded-lg py-1.5 text-xs flex items-center justify-center gap-1">
                <CheckSquare size={13} /> Reconcile
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Transactions</h3>
          <DataTable
            columns={[
              { key: 'date', label: 'Date' },
              { key: 'description', label: 'Description' },
              { key: 'type', label: 'Type', render: (r) => <Badge color={r.type === 'Credit' ? 'green' : 'red'}>{r.type}</Badge> },
              { key: 'amount', label: 'Amount', render: (r) => formatCurrency(r.amount) },
              { key: 'balance', label: 'Balance', render: (r) => formatCurrency(r.balance) },
            ]}
            data={bankTransactions}
          />
        </>
      )}
    </div>
  )
}