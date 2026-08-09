import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const sampleUsers = [
  { id: 1, name: 'System Administrator', email: 'admin@erp.local', role: 'Super Admin' },
  { id: 2, name: 'Rajesh Kumar', email: 'manager@erp.local', role: 'Manager' },
  { id: 3, name: 'Vikram Accountant', email: 'accountant@erp.local', role: 'Accountant' },
  { id: 4, name: 'kumar', email: 'cashier@erp.local', role: 'Cashier' },
]

const getStoredUser = () => {
  if (typeof window === 'undefined') return null

  try {
    const stored = window.localStorage.getItem('truezor-current-user')
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(getStoredUser)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (currentUser) {
      window.localStorage.setItem('truezor-current-user', JSON.stringify(currentUser))
    } else {
      window.localStorage.removeItem('truezor-current-user')
    }
  }, [currentUser])

  const login = (userId) => {
    const user = sampleUsers.find((u) => u.id === Number(userId))
    if (user) setCurrentUser(user)
    return !!user
  }

  const logout = () => setCurrentUser(null)

  const switchUser = (userId) => {
    const user = sampleUsers.find((u) => u.id === Number(userId))
    if (user) setCurrentUser(user)
  }

  const value = useMemo(() => ({ currentUser, users: sampleUsers, login, logout, switchUser }), [currentUser])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)