import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </DataProvider>
    </AuthProvider>
  )
}

export default App