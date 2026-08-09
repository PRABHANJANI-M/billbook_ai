import { Filter, Download, Printer } from 'lucide-react'
import Button from './Button'

export default function ReportFilterBar({ showCategory = false, onExportCSV }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-wrap items-end gap-3 mb-5">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">From Date</label>
        <input type="date" defaultValue="2026-07-01" className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">To Date</label>
        <input type="date" defaultValue="2026-08-09" className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">Store</label>
        <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm">
          <option>All Stores</option>
          <option>Main Store</option>
        </select>
      </div>
      {showCategory && (
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500">Category</label>
          <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm">
            <option>All Categories</option>
            <option>SOLAR PANEL</option>
            <option>CABLE TRAY</option>
            <option>GLAND</option>
          </select>
        </div>
      )}
      <div className="flex flex-col gap-1 flex-1 min-w-[160px]">
        <label className="text-xs text-gray-500">Search</label>
        <input placeholder="Search..." className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm w-full" />
      </div>
      <Button variant="outline" className="!py-1.5 flex items-center gap-1">
        <Filter size={14} /> Filter
      </Button>
      <Button variant="outline" className="!py-1.5 flex items-center gap-1" onClick={onExportCSV}>
        <Download size={14} /> Export CSV
      </Button>
      <Button variant="outline" className="!py-1.5 flex items-center gap-1">
        <Printer size={14} /> Print
      </Button>
    </div>
  )
}