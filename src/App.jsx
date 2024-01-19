import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { ProductsPage } from './pages/ProductsPage'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  const routes = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/login', element: <LoginPage />},
    {path: 'auth/products', element: <ProductsPage />},
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
