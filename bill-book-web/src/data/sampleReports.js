import { products } from './sampleProducts'
import { purchases } from './samplePurchases'
import { invoices } from './sampleSales'
import { expenses } from './sampleExpenses'
import { bankTransactions } from './sampleBank'

// ---------- INVENTORY REPORTS ----------

export const currentStockReport = products.map((p, i) => ({
  id: p.id,
  sku: p.sku,
  name: p.name,
  category: p.category,
  stock: p.stock,
  alertQty: p.alertQty,
  unit: p.unit,
  costPrice: p.costPrice,
  valuation: p.stock * p.costPrice,
}))

export const lowStockReport = currentStockReport.filter(
  (p) => p.stock > 0 && p.stock <= p.alertQty
)

export const outOfStockReport = currentStockReport.filter((p) => p.stock === 0)

export const stockMovementLog = [
  { id: 1, date: '05-07-2026', product: '10KW solar panel', type: 'IN', qty: 50, reference: 'PUR-20260624-00005', balance: 20 },
  { id: 2, date: '05-07-2026', product: 'Desktop', type: 'OUT', qty: 8, reference: 'INV-20260705-0009', balance: 90 },
  { id: 3, date: '03-07-2026', product: 'king rice 26kg', type: 'OUT', qty: 3, reference: 'INV-20260703-0006', balance: 45 },
  { id: 4, date: '01-07-2026', product: '10KW solar panel', type: 'ADJUSTMENT', qty: -2, reference: 'ADJ-20260628-002', balance: 20 },
  { id: 5, date: '26-06-2026', product: 'Desktop', type: 'IN', qty: 5, reference: 'ADJ-20260701-001', balance: 90 },
]

export const purchaseSummaryReport = currentStockReport.slice(0, 8).map((p, i) => ({
  sku: p.sku,
  product: p.name,
  category: p.category,
  transactions: 2 + (i % 4),
  totalQty: 20 + i * 6,
  avgCost: p.costPrice,
  minCost: p.costPrice * 0.92,
  maxCost: p.costPrice * 1.08,
  totalValue: (20 + i * 6) * p.costPrice,
  lastPurchase: ['05-07-2026', '28-06-2026', '15-06-2026'][i % 3],
}))

export const salesSummaryReport = currentStockReport.slice(0, 8).map((p, i) => ({
  sku: p.sku,
  product: p.name,
  category: p.category,
  transactions: 3 + (i % 5),
  totalQty: 12 + i * 4,
  avgPrice: p.costPrice * 1.15,
  minPrice: p.costPrice * 1.1,
  maxPrice: p.costPrice * 1.25,
  totalValue: (12 + i * 4) * (p.costPrice * 1.15),
  lastSale: ['06-07-2026', '30-06-2026', '18-06-2026'][i % 3],
}))

export const deadStockReport = currentStockReport.slice(0, 5).map((p, i) => ({
  ...p,
  lastMovementDate: ['12-04-2026', '02-03-2026', '20-01-2026', '11-04-2026', '05-02-2026'][i],
  daysSinceMovement: [118, 149, 200, 119, 175][i],
}))

export const fastMovingItems = currentStockReport.slice(0, 5).map((p, i) => ({
  ...p,
  unitsSoldLast30Days: [86, 74, 61, 58, 50][i],
  velocity: 'Fast',
}))

export const slowMovingItems = currentStockReport.slice(5, 10).map((p, i) => ({
  ...p,
  unitsSoldLast30Days: [4, 3, 2, 1, 0][i],
  velocity: 'Slow',
}))

export const inventoryOverviewStats = {
  productsPurchased: 42,
  totalQuantity: 1860,
  totalValue: 1245600.0,
}

// ---------- SALES & PURCHASE REPORTS ----------

export const salesReportRows = invoices.map((inv) => ({
  id: inv.id,
  reference: inv.ref,
  date: inv.date,
  party: inv.customer,
  total: inv.total,
  paid: inv.paid,
  due: inv.due,
  status: inv.status,
}))

export const purchaseReportRows = purchases.map((p, i) => ({
  id: i + 1,
  reference: p.ref,
  date: p.date,
  supplier: p.supplier,
  total: p.total,
  paid: p.paid,
  due: p.due,
  status: p.status,
}))

export const purchaseReportStats = {
  totalPurchases: purchaseReportRows.reduce((s, r) => s + r.total, 0),
  totalPaid: purchaseReportRows.reduce((s, r) => s + r.paid, 0),
  totalDue: purchaseReportRows.reduce((s, r) => s + r.due, 0),
  invoiceCount: purchaseReportRows.length,
}

export const dcReportRows = [
  { id: 1, dcNumber: 'DC-20260705-006', date: '05-07-2026', customer: 'Walk-in Customer', items: 4, status: 'Delivered' },
  { id: 2, dcNumber: 'DC-20260702-005', date: '02-07-2026', customer: 'senthil agency', items: 2, status: 'In Transit' },
  { id: 3, dcNumber: 'DC-20260628-004', date: '28-06-2026', customer: 'ELITE POWER CORPORATIONS', items: 6, status: 'Draft' },
]

export const expenseReportRows = expenses.map((e) => ({
  id: e.id,
  category: e.category,
  date: e.date,
  description: e.description,
  amount: e.amount,
  paidVia: e.paidVia,
}))

export const paymentReportRows = [
  { id: 1, date: '05-07-2026', reference: 'PAY-20260705-001', party: 'Walk-in Customer', type: 'Received', mode: 'Cash', amount: 16520.0 },
  { id: 2, date: '26-06-2026', reference: 'PAY-20260626-002', party: 'ELITE POWER CORPORATIONS', type: 'Received', mode: 'Bank', amount: 200000.0 },
  { id: 3, date: '01-07-2026', reference: 'EXP-20260705-001', party: 'Landlord', type: 'Paid', mode: 'Bank', amount: 25000.0 },
  { id: 4, date: '24-06-2026', reference: 'PUR-20260624-00005', party: 'senthil agency', type: 'Paid', mode: 'Bank', amount: 207680.0 },
]

// ---------- FINANCIAL REPORTS ----------

const totalCashIn = 216520.0
const totalCashOut = 232680.0

export const cashFlowData = {
  totalCashIn,
  totalCashOut,
  netCashFlow: totalCashIn - totalCashOut,
  cashInflows: [
    { source: 'Sales Collection - INV-20260705-0009', amount: 16520.0 },
    { source: 'Payment Received - ELITE POWER CORPORATIONS', amount: 200000.0 },
  ],
  purchasePayments: [
    { source: 'Purchase Payment - senthil agency', amount: 207680.0 },
  ],
  expensePayments: bankTransactions
    .filter((t) => t.type === 'Debit' && t.description.toLowerCase().includes('rent'))
    .map((t) => ({ source: t.description, amount: t.amount }))
    .concat([{ source: 'Electricity bill', amount: 4200.0 }, { source: 'Delivery fuel', amount: 800.0 }]),
}

export const balanceSheetData = {
  asOf: '31-07-2026',
  assets: [
    { label: 'Cash in Hand', amount: 16520.0 },
    { label: 'Bank Balance', amount: 5000.0 },
    { label: 'Inventory Valuation', amount: 1245600.0 },
    { label: 'Accounts Receivable', amount: 154200.0 },
  ],
  liabilities: [
    { label: 'Accounts Payable', amount: 240200.0 },
    { label: 'TDS Payable', amount: 2950.0 },
  ],
  equity: [
    { label: "Owner's Capital", amount: 1000000.0 },
    { label: 'Retained Earnings', amount: 178170.0 },
  ],
}

export const inventoryReportTabs = [
  { to: '/reports/inventory', label: 'Dashboard' },
  { to: '/reports/inventory/current-stock', label: 'Current Stock' },
  { to: '/reports/inventory/low-stock', label: 'Low Stock' },
  { to: '/reports/inventory/out-of-stock', label: 'Out of Stock' },
  { to: '/reports/inventory/stock-movement', label: 'Stock Movement' },
  { to: '/reports/inventory/purchase-summary', label: 'Purchase Summary' },
  { to: '/reports/inventory/sales-summary', label: 'Sales Summary' },
  { to: '/reports/inventory/stock-adjustments', label: 'Stock Adjustments' },
  { to: '/reports/inventory/dead-stock', label: 'Dead Stock' },
  { to: '/reports/inventory/fast-slow', label: 'Fast / Slow' },
]

export const salesPurchaseReportTabs = [
  { to: '/reports/sales', label: 'Sales Report' },
  { to: '/reports/purchases', label: 'Purchase Report' },
  { to: '/reports/dc', label: 'DC Report' },
  { to: '/reports/expenses', label: 'Expense Report' },
  { to: '/reports/payments', label: 'Payment Report' },
]