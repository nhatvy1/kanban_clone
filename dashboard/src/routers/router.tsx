import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/login/login.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home page</h1>
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

export default router
