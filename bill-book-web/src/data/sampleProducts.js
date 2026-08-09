export const products = [
  { id: 1, name: '10KW solar panel', sku: 'SKU-1001', barcode: '8901001', category: 'SOLAR PANEL', brand: 'Solis', unit: 'pcs', costPrice: 12000, price: 14000.00, stock: 20, hsn: '8541', taxRate: 18, alertQty: 5, active: true },
  { id: 2, name: '10SQMM CU LONG BARREL', sku: 'SKU-1002', barcode: '8901002', category: 'CABLE TRAY', brand: 'Havells', unit: 'pcs', costPrice: 0, price: 0.00, stock: 0, hsn: '8544', taxRate: 18, alertQty: 5, active: true },
  { id: 3, name: '110 KW PV SOLAR SOCKET(12MM)', sku: 'SKU-1003', barcode: '8901003', category: 'SOLAR PANEL', brand: 'Solis', unit: 'pcs', costPrice: 0, price: 0.00, stock: 0, hsn: '8541', taxRate: 18, alertQty: 5, active: true },
  { id: 4, name: '120SQMM ALU CORE ALU CABLE', sku: 'SKU-1004', barcode: '8901004', category: 'CABLE TRAY', brand: 'Polycab', unit: 'm', costPrice: 0, price: 0.00, stock: 0, hsn: '8544', taxRate: 18, alertQty: 10, active: true },
  { id: 5, name: '125 KW PV SOLAR INVERTER-SOLIS', sku: 'SKU-1005', barcode: '8901005', category: 'SOLAR PANEL', brand: 'Solis', unit: 'pcs', costPrice: 0, price: 0.00, stock: 0, hsn: '8541', taxRate: 18, alertQty: 2, active: true },
  { id: 6, name: '16SQMM CU RING(0/C)SOCKET', sku: 'SKU-1006', barcode: '8901006', category: 'GLAND', brand: 'Generic', unit: 'pcs', costPrice: 0, price: 0.00, stock: 0, hsn: '8536', taxRate: 18, alertQty: 5, active: true },
  { id: 7, name: 'Desktop', sku: 'SKU-1007', barcode: '8901007', category: 'monitor', brand: 'Dell', unit: 'pcs', costPrice: 7000, price: 8000.00, stock: 90, hsn: '8471', taxRate: 18, alertQty: 5, active: true },
  { id: 8, name: 'king rice 26kg', sku: 'SKU-1008', barcode: '8901008', category: 'GENERAL', brand: 'Generic', unit: 'bag', costPrice: 1500, price: 1750.00, stock: 45, hsn: '1006', taxRate: 5, alertQty: 10, active: true },
  { id: 9, name: '40 KW 3 PHASE,PV SOLAR INVERTER', sku: 'SKU-1009', barcode: '8901009', category: 'SOLAR PANEL', brand: 'Solis', unit: 'pcs', costPrice: 0, price: 0.00, stock: 0, hsn: '8541', taxRate: 18, alertQty: 2, active: true },
  { id: 10, name: 'BLIND RIVET 4.8*10.3 MM', sku: 'SKU-1010', barcode: '8901010', category: 'SPIRAL', brand: 'Generic', unit: 'pcs', costPrice: 0, price: 0.00, stock: 0, hsn: '7318', taxRate: 18, alertQty: 20, active: true },
  { id: 11, name: '240SQMM ALU LONG BARREL', sku: 'SKU-1011', barcode: '8901011', category: 'CABLE TRAY', brand: 'Polycab', unit: 'pcs', costPrice: 0, price: 0.00, stock: 0, hsn: '8544', taxRate: 18, alertQty: 5, active: true },
  { id: 12, name: '25 KW 3 PHASE,PV SOLAR INVERTER', sku: 'SKU-1012', barcode: '8901012', category: 'SOLAR PANEL', brand: 'Solis', unit: 'pcs', costPrice: 0, price: 0.00, stock: 0, hsn: '8541', taxRate: 18, alertQty: 2, active: true },
]

export const categories = [
  { id: 1, name: 'Battery', productCount: 4 },
  { id: 2, name: 'CABLE TRAY', productCount: 12 },
  { id: 3, name: 'GLAND', productCount: 6 },
  { id: 4, name: 'LIGHTING ARRESTER', productCount: 3 },
  { id: 5, name: 'monitor', productCount: 2 },
  { id: 6, name: 'SOLAR PANEL', productCount: 18 },
  { id: 7, name: 'SPIRAL', productCount: 5 },
  { id: 8, name: 'UPVC', productCount: 7 },
]

export const brands = [
  { id: 1, name: 'Solis', productCount: 10 },
  { id: 2, name: 'Havells', productCount: 8 },
  { id: 3, name: 'Polycab', productCount: 12 },
  { id: 4, name: 'Dell', productCount: 3 },
  { id: 5, name: 'Generic', productCount: 20 },
]

export const units = [
  { id: 1, name: 'Pieces', short: 'pcs' },
  { id: 2, name: 'Meter', short: 'm' },
  { id: 3, name: 'Kilogram', short: 'kg' },
  { id: 4, name: 'Bag', short: 'bag' },
  { id: 5, name: 'Box', short: 'box' },
]

export const manufacturers = [
  { id: 1, name: 'Solis Technologies', country: 'China' },
  { id: 2, name: 'Havells India', country: 'India' },
  { id: 3, name: 'Polycab Wires', country: 'India' },
  { id: 4, name: 'Dell Technologies', country: 'USA' },
]

export const categoryTabs = ['All', 'Battery', 'CABLE TRAY', 'GLAND', 'LIGHTING ARRESTER', 'monitor', 'SOLAR PANEL', 'SPIRAL', 'UPVC']