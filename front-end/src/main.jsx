import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Contato from './routes/Contato.jsx'
import Encomendas from './routes/Encomendas.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/produtos',
        element: <Produtos />
      },
      {
        path: '/contato',
        element: <Contato />
      },
      {
        path: '/encomendas',
        element: <Encomendas />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
