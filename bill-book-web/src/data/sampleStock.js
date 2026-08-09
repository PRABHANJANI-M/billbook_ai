export const openingStockEntries = [
  { id: 1, product: '10KW solar panel', sku: 'SKU-1001', qty: 20, unitCost: 12000, date: '01-04-2026', store: 'Main Store' },
  { id: 2, product: 'Desktop', sku: 'SKU-1007', qty: 90, unitCost: 7000, date: '01-04-2026', store: 'Main Store' },
  { id: 3, product: 'king rice 26kg', sku: 'SKU-1008', qty: 45, unitCost: 1500, date: '01-04-2026', store: 'Main Store' },
]

export const stockAdjustments = [
  { id: 1, ref: 'ADJ-20260701-001', product: 'Desktop', type: 'Add', qty: 5, reason: 'Stock recount', date: '01-07-2026', by: 'Rajesh Kumar' },
  { id: 2, ref: 'ADJ-20260628-002', product: '10KW solar panel', type: 'Remove', qty: 2, reason: 'Damaged in transit', date: '28-06-2026', by: 'kumar' },
]

export const stockTransfers = []