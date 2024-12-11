import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContainer, LoginWrapper } from './index.styled.js'
const { VITE_BUCKETLAB_SERVER } = import.meta.env

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  useEffect(() => {},[])

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

    fetch(`${VITE_BUCKETLAB_SERVER}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': 'I-be-token'
      },
      body: JSON.stringify({ userName, password })
    })
    .then(res => res.json())
    .then(data => {
      console.log('Fetch Sucess: ', data)
    })
    .catch((err) => console.log('Fetch Fail: ', err))

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
            <button onClick={() => navigate(-1)}>Cancel</button>
          </form>
        </LoginWrapper>
      </LoginContainer>
    </>
  )
}