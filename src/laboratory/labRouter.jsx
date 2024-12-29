import { createBrowswerRouter } from 'react-router-dom'
import Root from './routes/Root'
import Cubicle from './routes/Cubicle'
import ErrorPage from './routes/ErrorPage'

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Cubicle />,
          },
        ]
      },
  }
]

const router = createBrowswerRouter(routes)

export default router