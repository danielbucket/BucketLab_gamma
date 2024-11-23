import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContainer, LoginWrapper } from './index.styled.js'

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors({ username: '', password: '' })

    if (userName === '') {
      setErrors({ ...errors, username: 'Username is required' })
    }
    if (password === '') {
      setErrors({ ...errors, password: 'Password is required' })
    }
    if (password.length < 8) {
      setErrors({ ...errors, password: 'Password must be at least 8 characters' })
    }

    // fetch('http://localhost:3000/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ userName, password })
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data)
    // })
    // .catch((err) => console.log(err))

    if (userName !== '' && password !== '' && password.length >= 8) {
      navigate('/', {
        state: { userName }
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'username') {
      setUserName(() => value)
    }
    if (name === 'password') {
      setPassword(() => value)
    }
  }

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <form onSubmit={(data) => handleSubmit(data)}>
            <label>Username</label>
            <input
              type='text'
              value={userName}
              placeholder='Username'
              name='username'
              onChange={(e) => handleChange(e)}
              />
            <label>Password</label>
            <input
              type='text'
              value={password}
              placeholder='Password'
              name='password'
              onChange={(e) => handleChange(e)}
              />
            <input type='submit' />
          </form>
        </LoginWrapper>
      </LoginContainer>
    </>
  )
}