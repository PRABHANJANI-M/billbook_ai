import { useState } from 'react'
import { Layers } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import { modules, roleNames, moduleAccessMatrix } from '../../data/sampleSettings'

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`w-12 h-7 rounded-full relative transition-colors flex items-center ${checked ? 'bg-indigo-600' : 'bg-gray-200'}`}
    >
      <span
        className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

export default function ModuleAccess() {
  const [matrix, setMatrix] = useState(moduleAccessMatrix)

  const toggle = (mod, role) => {
    setMatrix((prev) => ({
      ...prev,
      [mod]: { ...prev[mod], [role]: !prev[mod][role] },
    }))
  }

  return (
    <div>
      <PageHeader icon={Layers} title="Module Access" />
      <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-gray-500 text-xs uppercase">
              <th className="text-left px-4 py-3 font-medium">Module</th>
              {roleNames.map((r) => (
                <th key={r} className="text-center px-4 py-3 font-medium">{r}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {modules.map((mod) => (
              <tr key={mod} className="border-b border-gray-50">
                <td className="px-4 py-3 font-medium text-gray-700">{mod}</td>
                {roleNames.map((role) => (
                  <td key={role} className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center h-16">
                      <Toggle checked={matrix[mod]?.[role]} onChange={() => toggle(mod, role)} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}