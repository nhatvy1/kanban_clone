import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ErrorPage from '@/pages/error/error.page'
import AuthorizationRoute from '@/providers/authorization.route'
const LoginRoute = lazy(() => import('@/providers/login.route'))
const ProjectManagementPage = lazy(
  () => import('@/pages/project-management/project.management')
)
const Authentication = lazy(() => import('@/providers/authentication.route'))
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
        <Authentication>
          <Layout />
        </Authentication>
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
      },
      {
        path: '/test',
        element: (
          <AuthorizationRoute module='team' permission='read'>
            <div>Test chức năng authorization route</div>
          </AuthorizationRoute>
        )
      },
      {
        path: '/not-allowed-to-access-this-page',
        element: <div>Bạn không có quyền truy cập</div>
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
  }
])

export default router
