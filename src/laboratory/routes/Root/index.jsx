import { Outlet } from 'react-router-dom'
import Dashboard from '../Dashboard'
import { RootStyle } from './index.styled'

export default function LabRoot() {

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