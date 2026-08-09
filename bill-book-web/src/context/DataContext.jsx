import { createContext, useContext, useEffect, useReducer } from 'react'
import { products as seedProducts, categories, brands, units, manufacturers, categoryTabs } from '../data/sampleProducts'
import { invoices as seedInvoices, salesOrders as seedSalesOrders } from '../data/sampleSales'
import { purchases as seedPurchases, purchaseOrders as seedPurchaseOrders } from '../data/samplePurchases'
import { stockAdjustments as seedStockAdjustments } from '../data/sampleStock'

const STORAGE_KEY = 'erp_data_v1'

function loadInitialState() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      return JSON.parse(saved)
    } catch {
      // fall through to seed data if the saved JSON is corrupt
    }
  }
  return {
    products: seedProducts,
    invoices: seedInvoices,
    salesOrders: seedSalesOrders,
    purchases: seedPurchases,
    purchaseOrders: seedPurchaseOrders,
    stockAdjustments: seedStockAdjustments,
    categories,
    brands,
    units,
    manufacturers,
    categoryTabs,
  }
}

function nextId(list) {
  return list.length ? Math.max(...list.map((i) => i.id || 0)) + 1 : 1
}

function todayDMY() {
  const d = new Date()
  return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const product = { id: nextId(state.products), active: true, stock: 0, ...action.payload }
      return { ...state, products: [product, ...state.products] }
    }

    case 'UPDATE_PRODUCT': {
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload.id ? { ...p, ...action.payload } : p
        ),
      }
    }

    case 'DELETE_PRODUCT': {
      return { ...state, products: state.products.filter((p) => p.id !== action.payload.id) }
    }

    // Decrements stock for each line and appends the invoice. Used by both
    // the POS terminal and the "New Invoice" form so a sale always reduces stock.
    case 'ADD_SALE': {
      const { lines, customer, paid = 0 } = action.payload
      const subtotal = lines.reduce((sum, l) => sum + l.qty * l.price, 0)
      const tax = lines.reduce((sum, l) => sum + (l.qty * l.price * (l.taxRate ?? 18)) / 100, 0)
      const total = subtotal + tax
      const due = Math.max(total - paid, 0)
      const status = due === 0 ? 'Paid' : paid === 0 ? 'Unpaid' : 'Partial'

      const invoice = {
        id: nextId(state.invoices),
        ref: `INV-${Date.now()}`,
        date: todayDMY(),
        customer: customer || 'Walk-in Customer',
        total,
        paid,
        due,
        status,
        lines,
      }

      const products = state.products.map((p) => {
        const line = lines.find((l) => l.productId === p.id)
        return line ? { ...p, stock: Math.max(p.stock - line.qty, 0) } : p
      })

      return { ...state, invoices: [invoice, ...state.invoices], products }
    }

    // Increments stock for each line and appends the purchase record.
    case 'ADD_PURCHASE': {
      const { lines, supplier, paid = 0 } = action.payload
      const subtotal = lines.reduce((sum, l) => sum + l.qty * l.cost, 0)
      const tax = subtotal * 0.18
      const total = subtotal + tax
      const due = Math.max(total - paid, 0)
      const status = due === 0 ? 'Paid' : paid === 0 ? 'Unpaid' : 'Partial'

      const purchase = {
        id: nextId(state.purchases),
        ref: `PUR-${Date.now()}`,
        date: todayDMY(),
        supplier: supplier || '—',
        store: 'Main Store',
        total,
        paid,
        due,
        status,
        lines,
      }

      const products = state.products.map((p) => {
        const line = lines.find((l) => l.productId === p.id)
        return line ? { ...p, stock: p.stock + line.qty, costPrice: line.cost } : p
      })

      return { ...state, purchases: [purchase, ...state.purchases], products }
    }

    // Manual stock correction (used by Stock > Adjustments)
    case 'ADJUST_STOCK': {
      const { productId, productName, qtyChange, reason, by } = action.payload
      const products = state.products.map((p) =>
        p.id === productId ? { ...p, stock: Math.max(p.stock + qtyChange, 0) } : p
      )
      const entry = {
        id: nextId(state.stockAdjustments),
        ref: `ADJ-${Date.now()}`,
        product: productName,
        type: qtyChange >= 0 ? 'Add' : 'Remove',
        qty: Math.abs(qtyChange),
        reason: reason || 'Manual adjustment',
        date: todayDMY(),
        by: by || 'System',
      }
      return { ...state, products, stockAdjustments: [entry, ...state.stockAdjustments] }
    }

    case 'RESET_DEMO_DATA': {
      localStorage.removeItem(STORAGE_KEY)
      return {
        products: seedProducts,
        invoices: seedInvoices,
        salesOrders: seedSalesOrders,
        purchases: seedPurchases,
        purchaseOrders: seedPurchaseOrders,
        stockAdjustments: seedStockAdjustments,
        categories,
        brands,
        units,
        manufacturers,
        categoryTabs,
      }
    }

    default:
      return state
  }
}

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitialState)

  // Persist to localStorage on every change so a page refresh doesn't wipe data.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  return <DataContext.Provider value={{ ...state, dispatch }}>{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)