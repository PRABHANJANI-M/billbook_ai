import { Truck, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'

export default function NewChallan() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Delivery Challan created (sample only).')
    navigate('/sales/challans')
  }
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-semibold flex items-center gap-2"><Truck size={20} /> New Challan</h1>
        <button onClick={() => navigate(-1)} className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm flex items-center gap-1">
          <ArrowLeft size={14} /> Back
        </button>
      </div>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 max-w-2xl">
        <div>
          <label className="text-xs text-gray-500">Customer</label>
          <select className="input mt-1"><option>Walk-in Customer</option><option>senthil agency</option></select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500">Challan Date</label>
            <input type="date" className="input mt-1" defaultValue="2026-08-09" />
          </div>
          <div>
            <label className="text-xs text-gray-500">Vehicle Number</label>
            <input placeholder="TN-XX-XXXX" className="input mt-1" />
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-500">Notes</label>
          <textarea rows={3} className="input mt-1" />
        </div>
        <Button type="submit" className="w-fit">Create Challan</Button>
      </form>
      <style>{`.input { border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.5rem 0.75rem; font-size: 0.875rem; width: 100%; outline: none; }`}</style>
    </div>
  )
}