import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/login/login.page'
import ProtectedRoute from '../providers/protected.route'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <h1>Home admin</h1>
      </ProtectedRoute>
    )
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

export default router
