export const appSettings = {
  companyName: 'TRUEZOR ERP',
  address: '12 Industrial Estate, Chennai, Tamil Nadu, India',
  currency: 'INR (₹)',
  timezone: 'Asia/Kolkata (GMT+5:30)',
  invoicePrefix: 'INV-',
  poPrefix: 'PO-',
  fiscalYearStart: 'April',
  gstin: '33ABCDE1234F1Z5',
}

export const stores = [
  { id: 1, name: 'Main Store', address: '12 Industrial Estate, Chennai', phone: '9876543210', active: true },
]

export const roles = [
  {
    id: 1,
    name: 'Super Admin',
    permissions: { view: true, create: true, edit: true, delete: true, export: true },
  },
  {
    id: 2,
    name: 'Manager',
    permissions: { view: true, create: true, edit: true, delete: false, export: true },
  },
  {
    id: 3,
    name: 'Accountant',
    permissions: { view: true, create: true, edit: false, delete: false, export: true },
  },
  {
    id: 4,
    name: 'Cashier',
    permissions: { view: true, create: true, edit: false, delete: false, export: false },
  },
]

export const modules = [
  'Dashboard', 'POS', 'Products', 'Stock', 'Sales', 'Purchases',
  'Expenses', 'Contacts', 'Staff', 'GST & Tax', 'Accounting', 'Reports', 'Settings',
]

export const roleNames = ['Super Admin', 'Manager', 'Accountant', 'Cashier']

// module -> role -> boolean access
export const moduleAccessMatrix = {
  Dashboard: { 'Super Admin': true, Manager: true, Accountant: true, Cashier: true },
  POS: { 'Super Admin': true, Manager: true, Accountant: false, Cashier: true },
  Products: { 'Super Admin': true, Manager: true, Accountant: false, Cashier: false },
  Stock: { 'Super Admin': true, Manager: true, Accountant: false, Cashier: false },
  Sales: { 'Super Admin': true, Manager: true, Accountant: true, Cashier: true },
  Purchases: { 'Super Admin': true, Manager: true, Accountant: true, Cashier: false },
  Expenses: { 'Super Admin': true, Manager: true, Accountant: true, Cashier: false },
  Contacts: { 'Super Admin': true, Manager: true, Accountant: true, Cashier: false },
  Staff: { 'Super Admin': true, Manager: false, Accountant: false, Cashier: false },
  'GST & Tax': { 'Super Admin': true, Manager: false, Accountant: true, Cashier: false },
  Accounting: { 'Super Admin': true, Manager: false, Accountant: true, Cashier: false },
  Reports: { 'Super Admin': true, Manager: true, Accountant: true, Cashier: false },
  Settings: { 'Super Admin': true, Manager: false, Accountant: false, Cashier: false },
}

export const reminders = [
  { id: 1, title: 'GSTR-1 filing due', dueDate: '11-08-2026', priority: 'High', status: 'Pending' },
  { id: 2, title: 'Follow up with ELITE POWER CORPORATIONS on due payment', dueDate: '15-08-2026', priority: 'Medium', status: 'Pending' },
  { id: 3, title: 'Renew shop insurance', dueDate: '01-09-2026', priority: 'Low', status: 'Pending' },
  { id: 4, title: 'Stock recount - Cable Tray section', dueDate: '05-08-2026', priority: 'Medium', status: 'Done' },
]

export const activityLog = [
  { id: 1, user: 'System Administrator', action: 'Created invoice INV-20260705-0009', timestamp: '05-07-2026 14:22' },
  { id: 2, user: 'kumar', action: 'Recorded payment PAY-20260705-001', timestamp: '05-07-2026 14:25' },
  { id: 3, user: 'Rajesh Kumar', action: 'Approved Purchase Order PO-20260701-0004', timestamp: '01-07-2026 10:05' },
  { id: 4, user: 'System Administrator', action: 'Updated product Desktop stock (+5)', timestamp: '01-07-2026 09:40' },
  { id: 5, user: 'Vikram Accountant', action: 'Filed GSTR-3B for June 2026', timestamp: '28-06-2026 17:10' },
  { id: 6, user: 'kumar', action: 'Created delivery challan DC-20260628-004', timestamp: '28-06-2026 11:50' },
]