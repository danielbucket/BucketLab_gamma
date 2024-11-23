import { useState, useEffect } from 'react'
import { LoginContainer } from './index.styled.js'

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (data) => console.log(data)

  useEffect(() => {
    
  }, [])

  const handleChange = ({ target }) => {
    const { name, password } = target
    if (name === 'username') {
      setUserName(() => password)
    }
    if (name === 'password') {
      setPassword(() => password)
    }
  }

  return (
    <>
      <LoginContainer>
        <h1>Log-In</h1>
        <form onSubmit={(data) => handleSubmit(data)}>
          <label>User Name</label>
          <input
            onChange={(e) => handleChange(e)}
            value={userName}
            name='username'
            />
          <label>Password</label>
          <input
            onChange={(e) => handleChange(e)}
            value={password}
            name='password'
            />
          <input type='submit' />
        </form>
      </LoginContainer>
    </>
  )
}