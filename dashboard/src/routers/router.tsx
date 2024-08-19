import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/login/login.page'
import ProtectedRoute from '../providers/protected.route'
import PrivateRoute from '../providers/private.router'
import Layout from '../components/layout/layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <Layout />
      </ProtectedRoute>
    )
  },
  {
    path: '/login',
    element: (
      <PrivateRoute>
        <LoginPage />
      </PrivateRoute>
    )
  }
])

export default router
