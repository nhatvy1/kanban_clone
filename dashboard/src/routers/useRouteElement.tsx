import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Navigate, useRoutes } from 'react-router-dom'
import LayoutAdmin from '../components/layout/layout.admin'
import { links } from './links'
import LoginPage from '../pages/login/login.page'

const useRouteElements = () => {
  function ProtectedHomePage() {
    const { token } = useSelector((state: RootState) => state.auth.auth)
    if (token) {
      return <Navigate to='/admin' />
    }

    return <Navigate to='/login' />
  }

  function ProtectedRoute() {
    const { token } = useSelector((state: RootState) => state.auth.auth)

    if (!token) {
      return <Navigate to='/login' />
    }

    return <LayoutAdmin />
  }

  function getRoutes(links: any) {
    const routes: any = []

    links.forEach((link: any) => {
      routes.push({
        path: link.href,
        element: link.element
      })
    })

    const uniqueRoutes = [...new Set(routes.map((r: any) => r.path))].map(
      (path) => {
        return routes.find((r: any) => r.path === path)
      }
    )
    return uniqueRoutes
  }

  const routeElements = useRoutes([
    {
      path: '/',
      element: ProtectedHomePage()
    },
    {
      path: '/admin',
      element: ProtectedRoute(),
      children: getRoutes(links).map((route: any) => ({
        ...route,
        element: route.element
      }))
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ])

  return routeElements
}

export default useRouteElements
