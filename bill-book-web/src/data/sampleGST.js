export const gstr1Data = {
  period: 'July 2026',
  b2b: { invoices: 3, taxableValue: 350720.00, igst: 0, cgst: 31564.80, sgst: 31564.80 },
  b2c: { invoices: 12, taxableValue: 45000.00, igst: 0, cgst: 4050.00, sgst: 4050.00 },
  hsn: [
    { hsn: '8541', description: 'Solar Panels & Inverters', taxableValue: 280000.00, taxRate: 18, taxAmount: 50400.00 },
    { hsn: '8544', description: 'Cables', taxableValue: 65000.00, taxRate: 18, taxAmount: 11700.00 },
    { hsn: '1006', description: 'Rice', taxableValue: 15000.00, taxRate: 5, taxAmount: 750.00 },
  ],
}

export const gstr3bData = {
  period: 'July 2026',
  outwardTaxable: 395720.00,
  outwardTax: 71229.60,
  inwardTaxable: 207680.00,
  itcAvailable: 37382.40,
  netTaxPayable: 33847.20,
}

export const taxProfiles = [
  { id: 1, name: 'GST 18%', rate: 18, type: 'GST', appliesTo: 'Electronics, Solar' },
  { id: 2, name: 'GST 5%', rate: 5, type: 'GST', appliesTo: 'Food grains' },
  { id: 3, name: 'GST 12%', rate: 12, type: 'GST', appliesTo: 'Cables & wires' },
  { id: 4, name: 'GST 28%', rate: 28, type: 'GST', appliesTo: 'Luxury items' },
]

export const tdsTcsEntries = [
  { id: 1, type: 'TDS', section: '194Q', party: 'ELITE POWER CORPORATIONS', amount: 2950.00, date: '09-06-2026', status: 'Deposited' },
  { id: 2, type: 'TCS', section: '206C', party: 'senthil agency', amount: 1038.40, date: '24-06-2026', status: 'Pending' },
]