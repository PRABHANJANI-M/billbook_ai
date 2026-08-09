import { useState, useMemo } from 'react'
import { ShoppingCart, Search, Trash2, ArrowLeft, ScanBarcode, Keyboard } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import { formatCurrency } from '../../utils/format'

export default function POSTerminal() {
  const navigate = useNavigate()
  const { products: allProducts, categoryTabs, dispatch } = useData()
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('All')
  const [cart, setCart] = useState([])
  const [discountPct, setDiscountPct] = useState(0)
  const [paymentMode, setPaymentMode] = useState('Cash')

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchesCat = activeCat === 'All' || p.category === activeCat
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase())
      return matchesCat && matchesQuery
    })
  }, [query, activeCat, allProducts])

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id)
      if (exists) {
        if (exists.qty >= product.stock) return prev // can't oversell available stock
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id))
      return
    }
    const stock = allProducts.find((p) => p.id === id)?.stock ?? 0
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.min(qty, stock) } : i)))
  }

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id))

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const tax = cart.reduce((sum, i) => sum + (i.price * i.qty * i.taxRate) / 100, 0)
  const discount = (subtotal * discountPct) / 100
  const total = subtotal + tax - discount

  const handleCheckout = () => {
    if (cart.length === 0) return
    dispatch({
      type: 'ADD_SALE',
      payload: {
        customer: 'Walk-in Customer',
        paid: total, // POS sales are settled at the counter
        lines: cart.map((i) => ({ productId: i.id, name: i.name, qty: i.qty, price: i.price, taxRate: i.taxRate })),
      },
    })
    setCart([])
    setDiscountPct(0)
    alert(`Sale completed — ${formatCurrency(total)} paid via ${paymentMode}.`)
    navigate('/sales/invoices')
  }

  return (
    <div className="flex gap-4 h-[calc(100vh-8rem)]">
      {/* Left: Product grid */}
      <div className="flex-1 flex flex-col gap-3 min-w-0">
        <div className="flex items-center gap-2">
          <button className="border border-gray-200 rounded-lg px-3 py-2 text-sm flex items-center gap-1">
            <ArrowLeft size={15} /> Back
          </button>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingCart size={18} /> POS Terminal
          </h2>
        </div>

        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2.5">
          <Search size={16} className="text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Scan barcode or search products..."
            className="flex-1 outline-none text-sm"
          />
          <ScanBarcode size={16} className="text-gray-400" />
          <Keyboard size={16} className="text-gray-400" />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categoryTabs.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                activeCat === cat
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 overflow-y-auto pb-4">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => addToCart(p)}
              disabled={p.stock === 0}
              className={`bg-white border border-gray-200 rounded-xl p-3 text-left hover:border-indigo-400 hover:shadow-sm transition ${
                p.stock === 0 ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              <div className="w-full h-16 bg-gray-50 rounded-lg mb-2 flex items-center justify-center text-gray-300">
                <ShoppingCart size={22} />
              </div>
              <div className="text-xs font-semibold text-gray-800 line-clamp-2 leading-tight mb-1">{p.name}</div>
              <div className="text-sm font-bold text-indigo-600">{formatCurrency(p.price)}</div>
              <div className="text-[11px] text-gray-400">Stock: {p.stock}</div>
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-400 py-10 text-sm">No products found.</div>
          )}
        </div>
      </div>

      {/* Right: Cart */}
      <div className="w-80 bg-white border border-gray-200 rounded-xl flex flex-col shrink-0">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="font-semibold text-sm flex items-center gap-1">
            <ShoppingCart size={15} /> Order <span className="text-gray-400">{cart.length}</span>
          </span>
          <Trash2 size={15} className="text-gray-400 cursor-pointer" onClick={() => setCart([])} />
        </div>

        <div className="px-4 py-2 border-b border-gray-100">
          <label className="text-xs text-gray-500">Customer</label>
          <select className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm mt-1">
            <option>Walk-in Customer</option>
          </select>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-300 gap-2">
              <ShoppingCart size={40} />
              <span className="text-sm text-gray-400">Cart is empty</span>
              <span className="text-xs text-gray-300">Scan or tap a product to add.</span>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium text-gray-700 truncate">{item.name}</div>
                    <div className="text-[11px] text-gray-400">{formatCurrency(item.price)} each</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-6 h-6 rounded bg-gray-100 text-gray-600 text-xs"
                    >
                      −
                    </button>
                    <span className="text-xs w-5 text-center">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-6 h-6 rounded bg-gray-100 text-gray-600 text-xs"
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)}>
                    <Trash2 size={13} className="text-red-400" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-4 py-3 border-t border-gray-100 flex flex-col gap-1.5">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Tax (GST)</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>Discount %</span>
            <div className="flex gap-1">
              {[5, 10, 15, 20].map((d) => (
                <button
                  key={d}
                  onClick={() => setDiscountPct(d)}
                  className={`px-1.5 py-0.5 rounded border text-[10px] ${
                    discountPct === d ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200'
                  }`}
                >
                  {d}%
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between font-bold text-gray-800 text-base pt-1">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>

        <div className="px-4 pb-4 flex flex-col gap-2">
          <div className="grid grid-cols-4 gap-1.5">
            {['Cash', 'Card', 'UPI', 'Bank'].map((m) => (
              <button
                key={m}
                onClick={() => setPaymentMode(m)}
                className={`border rounded-lg py-1.5 text-[11px] ${
                  paymentMode === m ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-200 text-gray-600'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <button
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="bg-indigo-600 text-white rounded-lg py-2.5 text-sm font-semibold disabled:opacity-40"
          >
            ✓ Checkout
          </button>
          <label className="flex items-center gap-1.5 text-xs text-gray-500">
            <input type="checkbox" /> Thermal receipt (80mm)
          </label>
        </div>
      </div>
    </div>
  )
}