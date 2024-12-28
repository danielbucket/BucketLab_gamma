import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AccountHomeContainer, AccountHomeWrapper } from './index.styled'

const { VITE_BUCKETLAB_SERVER } = import.meta.env

export default function AccountHome() {
  const [email, setEmail] = useState('')
  const [first_name, setFirstName] = useState('')
  
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.first_name && location.state?.email) {
      setEmail(() => location.state.email)
      setFirstName(() => location.state.first_name)
    }
  }, [location.state])

  return (
    <>
    <AccountHomeContainer>
      <AccountHomeWrapper>
        <div>
          <h1>Welcome to the laboratory, {first_name}.</h1>
          <p>Your email is {email}.</p>
          <p>Go forth and do cool stuff!</p>
        </div>
        <div>
          <button onClick={() => {
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
      </AccountHomeWrapper>
    </AccountHomeContainer>
    </>
  )
}