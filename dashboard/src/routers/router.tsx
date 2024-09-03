import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ErrorPage from '@/pages/error/error.page'
import FixLayout from '@/pages/fix-layout/fix.layout'
const LoginRoute = lazy(()=> import('@/providers/login.route'))
const ProjectManagementPage = lazy(
  () => import('@/pages/project-management/project.management')
)
const ProtectedRoute = lazy(() => import('@/providers/protected.route'))
const Layout = lazy(() => import('@/components/layout/layout'))
const LoginPage = lazy(() => import('@/pages/login/login.page'))
const SkeletonPage = lazy(() => import('@/components/skeleton/skeleton.page'))
const UserManagementPage = lazy(
  () => import('@/pages/user-management/user.management.page')
)
const TeamManagementPage = lazy(
  () => import('@/pages/team-managment/team.management.page')
)

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<SkeletonPage />}>
        <ProtectedRoute allowedRoles={['admin']}>
          <Layout />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      {
        path: '/user-management',
        element: (
          <Suspense fallback={<SkeletonPage />}>
            <UserManagementPage />
          </Suspense>
        )
      },
      {
        path: '/team-management',
        element: (
          <Suspense fallback={<SkeletonPage />}>
            <TeamManagementPage />
          </Suspense>
        )
      },
      {
        path: '/project-management',
        element: (
          <Suspense fallback={<SkeletonPage />}>
            <ProjectManagementPage />
          </Suspense>
        )
      }
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
  },
  {
    path: '/fix-layout',
    element: <FixLayout />
  }
])

export default router
