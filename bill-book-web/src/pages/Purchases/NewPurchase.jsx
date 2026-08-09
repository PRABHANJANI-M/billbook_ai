import { useState } from 'react'
import { ShoppingBag, ArrowLeft, Plus, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'
import { products } from '../../data/sampleProducts'
import { formatCurrency } from '../../utils/format'

export default function NewPurchase() {
  const navigate = useNavigate()
  const [lines, setLines] = useState([{ product: '', qty: 1, cost: 0 }])

  const addLine = () => setLines([...lines, { product: '', qty: 1, cost: 0 }])
  const removeLine = (i) => setLines(lines.filter((_, idx) => idx !== i))
  const updateLine = (i, key, value) => {
    const copy = [...lines]
    copy[i][key] = value
    if (key === 'product') {
      const p = products.find((p) => p.name === value)
      if (p) copy[i].cost = p.costPrice
    }
    setLines(copy)
  }
  const subtotal = lines.reduce((sum, l) => sum + l.qty * l.cost, 0)
  const tax = subtotal * 0.18
  const total = subtotal + tax

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Purchase recorded (sample only).')
    navigate('/purchases')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-semibold flex items-center gap-2"><ShoppingBag size={20} /> New Purchase</h1>
        <button onClick={() => navigate(-1)} className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm flex items-center gap-1">
          <ArrowLeft size={14} /> Back
        </button>
      </div>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 max-w-4xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500">Supplier</label>
            <select className="input mt-1">
              <option>senthil agency</option>
              <option>ELITE POWER CORPORATIONS</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500">Purchase Date</label>
            <input type="date" className="input mt-1" defaultValue="2026-08-09" />
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-500 mb-2 block">Items</label>
          <div className="flex flex-col gap-2">
            {lines.map((line, i) => (
              <div key={i} className="flex items-center gap-2">
                <select value={line.product} onChange={(e) => updateLine(i, 'product', e.target.value)} className="input flex-1">
                  <option value="">-- Select Product --</option>
                  {products.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
                </select>
                <input type="number" value={line.qty} onChange={(e) => updateLine(i, 'qty', Number(e.target.value))} className="input w-20" min={1} />
                <input type="number" value={line.cost} onChange={(e) => updateLine(i, 'cost', Number(e.target.value))} className="input w-28" />
                <span className="text-sm w-24 text-right">{formatCurrency(line.qty * line.cost)}</span>
                <button type="button" onClick={() => removeLine(i)}><Trash2 size={15} className="text-red-400" /></button>
              </div>
            ))}
          </div>
          <button type="button" onClick={addLine} className="text-indigo-600 text-xs flex items-center gap-1 mt-2">
            <Plus size={13} /> Add Line
          </button>
        </div>

        <div className="flex flex-col items-end gap-1 border-t border-gray-100 pt-3 text-sm">
          <div className="flex gap-8"><span className="text-gray-500">Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
          <div className="flex gap-8"><span className="text-gray-500">Tax (18%)</span><span>{formatCurrency(tax)}</span></div>
          <div className="flex gap-8 font-bold text-base"><span>Total</span><span>{formatCurrency(total)}</span></div>
        </div>

        <Button type="submit" className="w-fit">Save Purchase</Button>
      </form>
      <style>{`.input { border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.5rem 0.75rem; font-size: 0.875rem; width: 100%; outline: none; }`}</style>
    </div>
  )
}