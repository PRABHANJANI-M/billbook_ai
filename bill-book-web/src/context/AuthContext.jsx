import { createContext, useContext, useState } from 'react'

const sampleUsers = [
  { id: 1, name: 'System Administrator', email: 'admin@erp.local', role: 'Super Admin' },
  { id: 2, name: 'Rajesh Kumar', email: 'manager@erp.local', role: 'Manager' },
  { id: 3, name: 'Vikram Accountant', email: 'accountant@erp.local', role: 'Accountant' },
  { id: 4, name: 'kumar', email: 'cashier@erp.local', role: 'Cashier' },
]

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

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

  return (
    <AuthContext.Provider value={{ currentUser, users: sampleUsers, login, logout, switchUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)