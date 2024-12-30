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
      const { loggedIn, profile } = location.state
      const { permissions } = profile

      setLoggedIn(() => loggedIn)
      setProfile(() => profile)
      setPermissions(() => permissions)
    }
  }, [location.state])

  return (
    <>
      <StyledDashboard>
        <div className='dash-main'>
          <h1>Welcome to the laboratory, {profile.first_name}.</h1>
        </div>

        <div className='dash-status'>
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
          <div className='permissions-status'>
            { loggedIn 
              ? ( <>
                    <p>Permissions Active</p>
                    <p>Level:<span>{permissions.level}</span></p>
                    <p>Role:<span>{permissions.role}</span></p>
                  </>
              )
              : null
            }
          </div>
        </div>
      </StyledDashboard>
    </>
  )
}