import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { StyledDashboard } from './index.styled'

const { VITE_BUCKETLAB_SERVER } = import.meta.env

export default function LaboratoryDashboard() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [permissions, setPermissions] = useState({})
  const [profile, setProfile] = useState({})
  
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.loggedIn) {
      const { loggedIn, profile, permissions } = location.state
      setLoggedIn(() => loggedIn)
      setProfile(() => profile)
      setPermissions(() => permissions)
    }
  }, [location.state])

  return (
    <>
      <StyledDashboard>
        <div className='dash-greeting'>
          <h1>Welcome to the laboratory, {profile.first_name}.</h1>
          <p>Go forth and do cool shit!</p>
        </div>

        <div className='lab-admin'>
        <div className='permissions-status'>
          {/* should change colors based on permissionStatus boolean */}
          { loggedIn 
            ? ( <>
                  <p>Permissions Active</p>
                  <p>Permissions Level:<span>{permissions.level}</span></p>
                  <p>Permissions Role:<span>{permissions.role}</span></p>
                </>
            )
            : ( <>
                  <p>Permissions Inactive</p>
                  <p>Log back in to enable permissions.</p>
                </>
              )
          }
        </div>
          <div className='logout-btn'>
            <button onClick={() => {
              const { email } = profile
              fetch(`${VITE_BUCKETLAB_SERVER}/account/logout`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
              })
              .then((res) => res.json())
              .then((res) => {
                const { message } = res
                navigate('/homelab/login', {
                  state: { message }
                })
              })
            }}>Logout</button>
          </div>
        </div>
      </StyledDashboard>
    </>
  )
}