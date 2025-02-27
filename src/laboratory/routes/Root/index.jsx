import { Outlet } from 'react-router-dom'
import Dashboard from '../Dashboard'
import { RootStyle } from './index.styled'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom' 

export default function Root() {
  const [profile, setProfile] = useState({})
  const location = useLocation()

  useEffect(() => {
    if (location.state?.profile) {
      setProfile(() => location.state.profile)
    }
  }, [location.state])

  return (
    <RootStyle>
      <div className='lab-dashboard'>
        <Dashboard />
      </div>
      <div className='lab-terminal'>
        <Outlet />
      </div>
    </RootStyle>
  )
}