import { Upload } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import Button from '../../components/common/Button'

export default function ImportCSV() {
  return (
    <div>
      <PageHeader icon={Upload} title="Import CSV" />
      <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center gap-3 max-w-2xl">
        <Upload size={32} className="text-gray-300" />
        <p className="text-sm text-gray-500">Drag & drop a CSV file here, or click to browse</p>
        <Button variant="outline">Choose File</Button>
      </div>
    </div>
  )
}