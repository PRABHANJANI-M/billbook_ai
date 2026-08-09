import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext(null)

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false

  const stored = window.localStorage.getItem('truezor-theme')
  if (stored === 'dark') return true
  if (stored === 'light') return false

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.style.colorScheme = dark ? 'dark' : 'light'
    window.localStorage.setItem('truezor-theme', dark ? 'dark' : 'light')

    document.body.classList.remove('bg-slate-50', 'bg-slate-950', 'text-slate-900', 'text-slate-100')
    document.body.classList.add(dark ? 'bg-slate-950' : 'bg-slate-50')
    document.body.classList.add(dark ? 'text-slate-100' : 'text-slate-900')
  }, [dark])

  const toggleTheme = () => setDark((value) => !value)
  const value = useMemo(() => ({ dark, toggleTheme }), [dark])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)