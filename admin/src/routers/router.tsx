import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ErrorPage from '@/pages/error/ErrorPage'
import AuthorizationRoute from '@/providers/AuthorizationRoute'
import NotAccessPage from '@/pages/not-access-page/NotAccessPage'
const Layout = lazy (()=> import ('@/components/layout/layout'))
const LoginRoute = lazy(() => import('@/providers/LoginRoute'))
const ProjectManagementPage = lazy(
  () => import('@/pages/project-management/ProjectManagementPage')
)
const Authentication = lazy(() => import('@/providers/AuthenticationRoute'))
const LoginPage = lazy(() => import('@/pages/login/LoginPage'))
const SkeletonPage = lazy(() => import('@/components/skeleton/SkeletonPage'))
const UserManagementPage = lazy(
  () => import('@/pages/user-management/UserManagementPage')
)
const TeamManagementPage = lazy(
  () => import('@/pages/team-managment/TeamManagementPage')
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
        element: <NotAccessPage />
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
