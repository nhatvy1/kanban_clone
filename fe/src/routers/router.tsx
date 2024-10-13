import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ErrorPage from '@/pages/error/ErrorPage'
import SkeletonPage from '@/components/skeleton/SkeletonPage'
const LoginRoute = lazy(()=> import('@/providers/LoginRoute'))
const HomePage = lazy(()=> import('@/pages/home-page'))
const LoginPage = lazy(() => import('@/pages/login/LoginPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
