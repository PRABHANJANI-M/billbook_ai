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
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-slate-950">
      <div className="flex w-full max-w-sm flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">T</div>
          <h1 className="text-lg font-bold text-gray-800 dark:text-slate-100">TRUEZOR ERP</h1>
          <p className="text-xs text-gray-400">Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 dark:text-slate-400">Login as</label>
            <select
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>{user.name} — {user.role}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 dark:text-slate-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Any value works (sample only)"
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            />
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            className="flex items-center justify-center gap-1.5 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white"
          >
            <LogIn size={15} /> Sign In
          </button>
        </form>

        <p className="text-center text-[11px] text-gray-400">
          Demo app — no real authentication, pick any user above.
        </p>
      </div>
    </div>
  )
}