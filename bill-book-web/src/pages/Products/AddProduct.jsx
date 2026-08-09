import { useState } from 'react'
import { Package, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { categories, brands, units, manufacturers } from '../../data/sampleProducts'
import Button from '../../components/common/Button'

export default function AddProduct() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', type: 'Simple', sku: '', barcode: '', hsn: '', category: '', brand: '',
    unit: '', manufacturer: '', costPrice: 0, sellPrice: 0, taxRate: 18, alertQty: 5,
    minQty: 1, qtyStep: 1, description: '', active: true,
  })

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('New product:', form)
    alert('Product saved (sample only — not persisted).')
    navigate('/products')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <Package size={20} /> New Product
        </h1>
        <button onClick={() => navigate(-1)} className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm flex items-center gap-1">
          <ArrowLeft size={14} /> Back
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 max-w-4xl">
        <div className="grid grid-cols-3 gap-4">
          <Field label="Product Name *">
            <input required value={form.name} onChange={(e) => set('name', e.target.value)} className="input" />
          </Field>
          <Field label="Product Type">
            <select value={form.type} onChange={(e) => set('type', e.target.value)} className="input">
              <option>Simple</option>
              <option>Variable</option>
            </select>
          </Field>
          <Field label="SKU *">
            <input required value={form.sku} onChange={(e) => set('sku', e.target.value)} className="input" />
          </Field>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Field label="Barcode">
            <input value={form.barcode} onChange={(e) => set('barcode', e.target.value)} className="input" />
          </Field>
          <Field label="HSN Code (GST)">
            <input placeholder="e.g. 1006" value={form.hsn} onChange={(e) => set('hsn', e.target.value)} className="input" />
          </Field>
          <Field label="Category">
            <select value={form.category} onChange={(e) => set('category', e.target.value)} className="input">
              <option value="">-- Select --</option>
              {categories.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Field label="Brand">
            <select value={form.brand} onChange={(e) => set('brand', e.target.value)} className="input">
              <option value="">-- Select --</option>
              {brands.map((b) => <option key={b.id} value={b.name}>{b.name}</option>)}
            </select>
          </Field>
          <Field label="Unit">
            <select value={form.unit} onChange={(e) => set('unit', e.target.value)} className="input">
              <option value="">-- Select --</option>
              {units.map((u) => <option key={u.id} value={u.short}>{u.name}</option>)}
            </select>
          </Field>
          <Field label="Manufacturer">
            <select value={form.manufacturer} onChange={(e) => set('manufacturer', e.target.value)} className="input">
              <option value="">-- Select --</option>
              {manufacturers.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Cost Price *">
            <input type="number" value={form.costPrice} onChange={(e) => set('costPrice', e.target.value)} className="input" />
          </Field>
          <Field label="Sell Price *">
            <input type="number" value={form.sellPrice} onChange={(e) => set('sellPrice', e.target.value)} className="input" />
          </Field>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Field label="Tax Rate (%)">
            <input type="number" value={form.taxRate} onChange={(e) => set('taxRate', e.target.value)} className="input" />
          </Field>
          <Field label="Alert Qty">
            <input type="number" value={form.alertQty} onChange={(e) => set('alertQty', e.target.value)} className="input" />
          </Field>
          <Field label="Min Qty (first add)">
            <input type="number" value={form.minQty} onChange={(e) => set('minQty', e.target.value)} className="input" />
            <span className="text-[10px] text-gray-400">e.g. 0.5 = 500g</span>
          </Field>
          <Field label="Qty Step ±">
            <input type="number" value={form.qtyStep} onChange={(e) => set('qtyStep', e.target.value)} className="input" />
            <span className="text-[10px] text-gray-400">e.g. 0.1 = 100g</span>
          </Field>
        </div>

        <Field label="Description">
          <textarea rows={3} value={form.description} onChange={(e) => set('description', e.target.value)} className="input" />
        </Field>

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={form.active} onChange={(e) => set('active', e.target.checked)} />
          Active
        </label>

        <Button type="submit" className="w-fit">✓ Save Product</Button>
      </form>

      <style>{`.input { border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.5rem 0.75rem; font-size: 0.875rem; width: 100%; outline: none; }
      .input:focus { border-color: #6366f1; }`}</style>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-500">{label}</label>
      {children}
    </div>
  )
}