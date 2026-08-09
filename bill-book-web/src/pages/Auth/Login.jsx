import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
  const { users, login } = useAuth()
  const navigate = useNavigate()
  const [userId, setUserId] = useState(String(users[0].id))
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!password) {
      setError('Enter any password (sample login — not validated).')
      return
    }
    const ok = login(userId)
    if (ok) navigate('/')
    else setError('Invalid user.')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-8 flex flex-col gap-5">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">T</div>
          <h1 className="text-lg font-bold text-gray-800">TRUEZOR ERP</h1>
          <p className="text-xs text-gray-400">Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">Login as</label>
            <select
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
            >
              {users.map((u) => (
                <option key={u.id} value={u.id}>{u.name} — {u.role}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Any value works (sample only)"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
            />
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg py-2.5 text-sm font-semibold flex items-center justify-center gap-1.5"
          >
            <LogIn size={15} /> Sign In
          </button>
        </form>

        <p className="text-[11px] text-gray-400 text-center">
          Demo app — no real authentication, pick any user above.
        </p>
      </div>
    </div>
  )
}