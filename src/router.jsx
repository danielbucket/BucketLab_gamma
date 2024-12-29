import { createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root'
import Home from './routes/Home'
import Login from './routes/Login'
import About from './routes/About'
import Contact from './routes/Contact'
import HomeLab from './routes/HomeLab'
import Projects from './routes/Projects'
import ErrorPage from './routes/ErrorPage'
import Dashboard from './laboratory/routes/Dashboard'
import AccountRegistrationForm from './routes/AccountRegistrationForm'

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
            element: <Home />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
          {
            path: 'projects',
            element: <Projects />,
          },
          {
            path: 'homelab',
            element: <HomeLab />,
          },
          {
            path: 'homelab/login',
            element: <Login />,
          },
          {
            path: 'homelab/register',
            element: <AccountRegistrationForm />,
          }
        ]
      }
    ],
  },
  {
    path: '/laboratory',
    router: './laboratory/labRouter.jsx'
  },
]

const router = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
    // v7_relativeSplatPath: true,
    // v7_startTransition: true,
  }
})

export default router