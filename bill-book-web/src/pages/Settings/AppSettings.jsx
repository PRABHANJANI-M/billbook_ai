import { useState } from 'react'
import { Settings } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/common/Button'
import { appSettings } from '../../data/sampleSettings'

export default function AppSettings() {
  const [form, setForm] = useState(appSettings)
  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Settings saved (sample only).')
  }

  return (
    <div>
      <PageHeader icon={Settings} title="App Settings" />
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 max-w-2xl">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Company Name">
            <input value={form.companyName} onChange={(e) => set('companyName', e.target.value)} className="input" />
          </Field>
          <Field label="GSTIN">
            <input value={form.gstin} onChange={(e) => set('gstin', e.target.value)} className="input" />
          </Field>
        </div>

        <Field label="Address">
          <textarea rows={2} value={form.address} onChange={(e) => set('address', e.target.value)} className="input" />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Currency">
            <input value={form.currency} onChange={(e) => set('currency', e.target.value)} className="input" />
          </Field>
          <Field label="Timezone">
            <input value={form.timezone} onChange={(e) => set('timezone', e.target.value)} className="input" />
          </Field>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Field label="Invoice Prefix">
            <input value={form.invoicePrefix} onChange={(e) => set('invoicePrefix', e.target.value)} className="input" />
          </Field>
          <Field label="PO Prefix">
            <input value={form.poPrefix} onChange={(e) => set('poPrefix', e.target.value)} className="input" />
          </Field>
          <Field label="Fiscal Year Start">
            <select value={form.fiscalYearStart} onChange={(e) => set('fiscalYearStart', e.target.value)} className="input">
              <option>January</option>
              <option>April</option>
              <option>July</option>
            </select>
          </Field>
        </div>

        <Button type="submit" className="w-fit">Save Settings</Button>
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