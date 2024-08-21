import Layout from '@/components/layout/layout'
import LoginPage from '@/pages/login/login.page'
import UnauthorizationPage from '@/pages/unauthorization/unauthorization.page'
import AuthenticationRoute from '@/providers/authentication.route'
import LoginRoute from '@/providers/login.route'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthenticationRoute>
        <Layout />
      </AuthenticationRoute>
    ),
    children: [
      {
        path: '/user-management',
        element: <h2>user management</h2>
      },
      {
        path: '/team-management',
        element: <h2>team management</h2>
      },
      {
        path: '/project-management',
        element: <h2>project management</h2>
      },
      {
        path: '/reminato/user-management',
        element: <h2>Reminato user management</h2>
      },
      {
        path: '/reminato/api-key-management',
        element: <h2>Reminato api key management</h2>
      },
      {
        path: '/role-management',
        element: <h2>roles management</h2>
      },
      {
        path: '/unauthorization',
        element: <UnauthorizationPage />
      }
    ]
  },
  {
    path: '/login',
    element: (
      <LoginRoute>
        <LoginPage />
      </LoginRoute>
    )
  }
])

export default router
