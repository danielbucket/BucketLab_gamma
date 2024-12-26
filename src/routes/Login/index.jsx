import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LoginContainer, LoginWrapper } from './index.styled.js'

const { VITE_BUCKETLAB_SERVER } = import.meta.env

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (errors.length > 0) {
      console.log('Errors: ', errors)
    }
  }, [errors])

  useEffect(() => {
    if (location.state?.email && location.state?.message) {
      setEmail(() => location.state.email)
      setMessage(() => location.state.message)
    }
  }, [location.state])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors({ email: '', password: '' })

    if (email === '') {
      setErrors({ ...errors, email: 'Email is required' })
    }
    if (password === '') {
      setErrors({ ...errors, password: 'Password is required' })
    }
    if (password.length < 8) {
      setErrors({ ...errors, password: 'Password must be at least 8 characters' })
    }

    fetch(`${VITE_BUCKETLAB_SERVER}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': 'I-be-token'
      },
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
      console.log('Fetch Sucess: ', data)
    })
    .catch((err) => console.log('Fetch Fail: ', err))

    if (email !== '' && password !== '' && password.length >= 8) {
      navigate('/', {
        state: { email }
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'email') {
      setEmail(() => value)
    }
    if (name === 'password') {
      setPassword(() => value)
    }
  }

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          {
            message !== '' ? <div>{message}</div> : null
          }
          <form onSubmit={data => handleSubmit(data)}>
            <label>Email</label>
            <input
              type='text'
              value={email}
              placeholder='Email'
              name='email'
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
            <button onClick={() => navigate('/homelab')}>Cancel</button>
          </form>
          <div className='register-new'>
            <p>Don't have an account?</p>
            <button onClick={() => navigate('/homelab/register')}>Make one here.</button>
          </div>
        </LoginWrapper>
      </LoginContainer>
    </>
  )
}