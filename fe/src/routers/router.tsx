import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ErrorPage from '@/pages/error/ErrorPage'
import AuthorizationRoute from '@/providers/AuthorizationRoute'
const Layout = lazy (()=> import ('@/components/layout/layout'))

const Authentication = lazy(() => import('@/providers/AuthenticationRoute'))
const LoginPage = lazy(() => import('@/pages/login/LoginPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      // <Suspense fallback={<SkeletonPage />}>
      //   <Authentication>
          <Layout />
      //   </Authentication>
      // </Suspense>
    ),
    children: [
    ]
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<SkeletonPage />}>
        <LoginRoute>
          <LoginPage />
        </LoginRoute>
      </Suspense>
    )
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<SkeletonPage />}>
        <LoginRoute>
          <LoginPage />
        </LoginRoute>
      </Suspense>
    )
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

export default router
