import { createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root'
import Home from './routes/Home'
import Login from './routes/Login'
import About from './routes/About'
import Contact from './routes/Contact'
import HomeLab from './routes/HomeLab'
import Projects from './routes/Projects'
import ErrorPage from './routes/ErrorPage'
import AccountRegistrationForm from './routes/AccountRegistrationForm'

const routes = [
  {
    path: '/',
    element: <Root />,
    // component: Root, // v7 future feature
    errorElement: <ErrorPage />,
    //inside Root is where <Outlet /> renders the children of the Navigate component
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            // component: Home, // v7 future feature
            element: <Home />,
          },
          {
            path: 'about',
            // component: About, // v7 future feature
            element: <About />,
          },
          {
            path: 'contact',
            // component: Contact, // v7 future feature
            element: <Contact />,
          },
          {
            path: 'projects',
            // component: Projects, // v7 future feature
            element: <Projects />,
          },
          {
            path: 'homelab',
            // component: HomeLab, // v7 future feature
            element: <HomeLab />,
          },
          {
            path: 'homelab/login',
            // component: Login, // v7 future feature
            element: <Login />,
          },
          {
            path: 'homelab/register',
            // component: AccountRegistration, // v7 future feature
            // element: <AccountRegistrationForm />,
            element: <AccountRegistrationForm />,
          }
        ]
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
    // v7_relativeSplatPath: true,
    // v7_startTransition: true,
  }
})

export default router