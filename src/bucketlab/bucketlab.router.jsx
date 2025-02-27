import Root from './routes/Root'
import Home from './routes/Home'
import Login from './routes/Login'
import About from './routes/About'
import Contact from './routes/Contact'
import HomeLab from './routes/HomeLab'
import Projects from './routes/Projects'
import ErrorPage from './routes/ErrorPage'
import AccountRegistrationForm from './routes/AccountRegistrationForm'

export const router =  {
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
    ]
  }