export const bankAccounts = [
  {
    id: 1,
    holder: 'kumar',
    bank: 'State Bank of India',
    accountNumber: '****5614',
    ifsc: '87459230055',
    type: 'Savings',
    balance: 5000.00,
  },
]

export const bankTransactions = [
  { id: 1, date: '05-07-2026', description: 'Sales collection - INV-20260705-0009', type: 'Credit', amount: 16520.00, balance: 21520.00 },
  { id: 2, date: '01-07-2026', description: 'Rent payment', type: 'Debit', amount: 25000.00, balance: 5000.00 },
  { id: 3, date: '26-06-2026', description: 'Purchase payment - senthil agency', type: 'Debit', amount: 207680.00, balance: 30000.00 },
]

export const accountingLedger = [
  { id: 1, account: 'Sales Revenue', debit: 0, credit: 16520.00, date: '05-07-2026' },
  { id: 2, account: 'Cash in Hand', debit: 16520.00, credit: 0, date: '05-07-2026' },
  { id: 3, account: 'Rent Expense', debit: 25000.00, credit: 0, date: '01-07-2026' },
  { id: 4, account: 'Bank Account', debit: 0, credit: 25000.00, date: '01-07-2026' },
]