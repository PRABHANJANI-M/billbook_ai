export const purchaseOrders = [
  { id: 1, ref: 'PO-20260701-0004', date: '01-07-2026', supplier: 'senthil agency', total: 85000.00, status: 'Confirmed' },
  { id: 2, ref: 'PO-20260620-0003', date: '20-06-2026', supplier: 'ELITE POWER CORPORATIONS', total: 59200.00, status: 'Pending' },
]

export const purchases = [
  { ref: 'PUR-20260626-00006', date: '26-06-2026', supplier: '—', store: 'Main Store', total: 295000.00, paid: 295000.00, due: 0, status: 'Paid' },
  { ref: 'PUR-20260624-00005', date: '24-06-2026', supplier: 'senthil agency', store: 'Main Store', total: 207680.00, paid: 207680.00, due: 0, status: 'Paid' },
  { ref: 'PUR-20260609-00004', date: '09-06-2026', supplier: 'ELITE POWER CORPORATIONS', store: 'Main Store', total: 59200.00, paid: 30000.00, due: 29200.00, status: 'Partial' },
  { ref: 'PUR-20260508-00003', date: '08-05-2026', supplier: '—', store: 'Main Store', total: 12200.00, paid: 12200.00, due: 0, status: 'Paid' },
  { ref: 'PUR-20260508-00002', date: '08-05-2026', supplier: '—', store: 'Main Store', total: 1232805.00, paid: 1232805.00, due: 0, status: 'Paid' },
  { ref: 'PUR-20260508-00001', date: '08-05-2026', supplier: '—', store: 'Main Store', total: 211000.00, paid: 0, due: 211000.00, status: 'Unpaid' },
]

export const purchaseReturns = [
  { id: 1, ref: 'PR-20260630-001', originalPurchase: 'PUR-20260624-00005', date: '30-06-2026', supplier: 'senthil agency', amount: 15000.00, reason: 'Defective goods' },
]

export const suppliersToPay = [
  { id: 1, supplier: 'ELITE POWER CORPORATIONS', due: 29200.00, lastPurchase: '09-06-2026' },
  { id: 2, supplier: '—', due: 211000.00, lastPurchase: '08-05-2026' },
]