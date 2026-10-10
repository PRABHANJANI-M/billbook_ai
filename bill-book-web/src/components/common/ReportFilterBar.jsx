import { Filter, Download, Printer } from 'lucide-react'
import Button from './Button'

export default function ReportFilterBar({ showCategory = false, onExportCSV }) {
  return (
    <div className="mb-5 flex flex-wrap items-end gap-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 dark:text-slate-400">From Date</label>
        <input type="date" defaultValue="2026-07-01" className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 dark:text-slate-400">To Date</label>
        <input type="date" defaultValue="2026-08-09" className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 dark:text-slate-400">Store</label>
        <select className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20">
          <option>All Stores</option>
          <option>Main Store</option>
        </select>
      </div>
      {showCategory && (
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 dark:text-slate-400">Category</label>
          <select className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20">
            <option>All Categories</option>
            <option>SOLAR PANEL</option>
            <option>CABLE TRAY</option>
            <option>GLAND</option>
          </select>
        </div>
      )}
      <div className="flex min-w-[160px] flex-1 flex-col gap-1">
        <label className="text-xs text-gray-500 dark:text-slate-400">Search</label>
        <input placeholder="Search..." className="w-full rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20" />
      </div>
      <Button variant="outline" className="flex items-center gap-1 !py-1.5">
        <Filter size={14} /> Filter
      </Button>
      <Button variant="outline" className="flex items-center gap-1 !py-1.5" onClick={onExportCSV}>
        <Download size={14} /> Export CSV
      </Button>
      <Button variant="outline" className="flex items-center gap-1 !py-1.5">
        <Printer size={14} /> Print
      </Button>
    </div>
  )
}