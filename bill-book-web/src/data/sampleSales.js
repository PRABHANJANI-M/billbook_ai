export const salesOrders = [
  { id: 1, ref: 'SO-20260705-0012', date: '05-07-2026', customer: 'Walk-in Customer', total: 16520.00, status: 'Confirmed' },
  { id: 2, ref: 'SO-20260628-0011', date: '28-06-2026', customer: 'senthil agency', total: 45000.00, status: 'Pending' },
]

export const invoices = [
  { id: 1, ref: 'INV-20260705-0009', date: '05-07-2026', customer: 'Walk-in Customer', total: 16520.00, paid: 16520.00, due: 0, status: 'Paid' },
  { id: 2, ref: 'INV-20260626-0008', date: '26-06-2026', customer: 'ELITE POWER CORPORATIONS', total: 295000.00, paid: 200000.00, due: 95000.00, status: 'Partial' },
  { id: 3, ref: 'INV-20260609-0007', date: '09-06-2026', customer: 'senthil agency', total: 59200.00, paid: 0, due: 59200.00, status: 'Unpaid' },
]

export const saleReturns = [
  { id: 1, ref: 'SR-20260701-001', originalInvoice: 'INV-20260626-0008', date: '01-07-2026', customer: 'ELITE POWER CORPORATIONS', amount: 12000.00, reason: 'Wrong item' },
]

export const discounts = [
  { id: 1, name: 'Festival Offer', type: 'Percentage', value: 10, appliesTo: 'All Products', validTill: '31-08-2026', active: true },
  { id: 2, name: 'Bulk Purchase', type: 'Percentage', value: 5, appliesTo: 'SOLAR PANEL', validTill: '31-12-2026', active: true },
  { id: 3, name: 'Clearance', type: 'Flat', value: 500, appliesTo: 'CABLE TRAY', validTill: '15-07-2026', active: false },
]

export const deliveryChallans = [
  { id: 1, ref: 'DC-20260705-006', date: '05-07-2026', customer: 'Walk-in Customer', status: 'Delivered', ewb: '-' },
  { id: 2, ref: 'DC-20260702-005', date: '02-07-2026', customer: 'senthil agency', status: 'In Transit', ewb: 'EWB2026070001' },
  { id: 3, ref: 'DC-20260628-004', date: '28-06-2026', customer: 'ELITE POWER CORPORATIONS', status: 'Draft', ewb: '-' },
]

export const dcReturns = []

export const receivedPayments = [
  { id: 1, ref: 'PAY-20260705-001', invoice: 'INV-20260705-0009', customer: 'Walk-in Customer', amount: 16520.00, mode: 'Cash', date: '05-07-2026' },
  { id: 2, ref: 'PAY-20260626-002', invoice: 'INV-20260626-0008', customer: 'ELITE POWER CORPORATIONS', amount: 200000.00, mode: 'Bank', date: '26-06-2026' },
]