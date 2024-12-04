import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Spinner from './Spinner.jsx'
// import Counter from './Counter.jsx'
const LazyCounter = React.lazy(() => import('./Counter.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/counter',
        element:
        <React.Suspense fallback={<Spinner />}>
          <LazyCounter />
        </React.Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
