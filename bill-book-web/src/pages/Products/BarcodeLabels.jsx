import { ScanLine } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import { products } from '../../data/sampleProducts'
import Button from '../../components/common/Button'

export default function BarcodeLabels() {
  return (
    <div>
      <PageHeader icon={ScanLine} title="Barcode Labels" actions={<Button>Print Selected</Button>} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((p) => (
          <div key={p.id} className="bg-white border border-gray-200 rounded-lg p-3 flex flex-col items-center gap-1">
            <input type="checkbox" className="self-start" />
            <div className="text-[11px] font-medium text-center">{p.name}</div>
            <div className="w-full h-10 bg-[repeating-linear-gradient(90deg,#000,#000_2px,#fff_2px,#fff_4px)]" />
            <div className="text-[10px] text-gray-500">{p.barcode}</div>
          </div>
        ))}
      </div>
    </div>
  )
}