import { useState } from 'react'
import { Search } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/common/Button'

export default function GSTINLookup() {
  const [gstin, setGstin] = useState('')
  const [result, setResult] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    // Sample static lookup result
    setResult({
      gstin: gstin || '33ABCDE1234F1Z5',
      legalName: 'SENTHIL AGENCY',
      tradeName: 'Senthil Agency',
      status: 'Active',
      registrationDate: '01-07-2020',
      state: 'Tamil Nadu',
      businessType: 'Proprietorship',
    })
  }

  return (
    <div>
      <PageHeader icon={Search} title="GSTIN Lookup" />
      <form onSubmit={handleSearch} className="flex gap-2 max-w-lg mb-6">
        <input
          value={gstin}
          onChange={(e) => setGstin(e.target.value)}
          placeholder="Enter GSTIN, e.g. 33ABCDE1234F1Z5"
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
        />
        <Button type="submit">Lookup</Button>
      </form>

      {result && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-lg flex flex-col gap-3">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className="flex justify-between text-sm border-b border-gray-50 pb-2">
              <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
              <span className="font-medium text-gray-800">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}