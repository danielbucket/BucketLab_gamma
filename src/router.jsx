import { createBrowserRouter } from 'react-router-dom'
import { router as labRouter } from './laboratory/laboratory.router'
import { router as bucketlabRouter } from './bucketlab/bucketlab.router'

const routes = [
  bucketlabRouter,
  labRouter
]

const router = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
    // v7_relativeSplatPath: true,
    // v7_startTransition: true,
  }
})

export default router