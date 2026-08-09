import { KeyRound } from 'lucide-react'
import PageHeader from '../../components/common/PageHeader'
import { roles } from '../../data/sampleSettings'

const permLabels = ['view', 'create', 'edit', 'delete', 'export']

export default function RolesPermissions() {
  return (
    <div>
      <PageHeader icon={KeyRound} title="Roles & Permissions" />
      <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-gray-500 text-xs uppercase">
              <th className="text-left px-4 py-3 font-medium">Role</th>
              {permLabels.map((p) => (
                <th key={p} className="text-center px-4 py-3 font-medium capitalize">{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-b border-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">{role.name}</td>
                {permLabels.map((p) => (
                  <td key={p} className="px-4 py-3 text-center">
                    <input type="checkbox" defaultChecked={role.permissions[p]} className="w-4 h-4 accent-indigo-600" />
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