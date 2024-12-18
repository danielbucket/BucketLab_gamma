import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserRegistrationContainer, UserRegistrationWrapper } from './index.styled.js'
import { formValidate } from '../utils/formValidate.js'

const { VITE_BUCKETLAB_SERVER } = import.meta.env

export default function UserRegistration() {
  const [userName, setUserName] = useState('bucketRad')
  const [password, setPassword] = useState('password')
  const [email, setEmail] = useState('bucketrad@bucketlab.com')
  const [firstName, setFirstName] = useState('Bucket')
  const [lastName, setLastName] = useState('Ludwick')
  const [company, setCompany] = useState('BucketLab')
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors({ username: '', password: '', email: '', firstName: '', lastName: '' })

    // try {
    //   const errors = formValidate('username', userName)
    //   if (Object.keys(errors).length > 0) {
    //     setErrors(() => errors)
    //   }
    // }
    // catch (error) {
    //   console.log('Error: ', error)
    // }

    fetch(`${VITE_BUCKETLAB_SERVER}/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, password, email, firstName, lastName })
    })
    .then(res => res.json())
    .then(res => {
      console.log('Register New User Success: ', res)
    })
    .catch(err => {
      userErrorBoundary(err)
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'username':
        setUserName(() => value)
        break
      case 'password':
        setPassword(() => value)
        break
      case 'email':
        setEmail(() => value)
        break
      case 'firstName':
        setFirstName(() => value)
        break
      case 'lastName':
        setLastName(() => value)
        break
      case 'company':
        setCompany(() => value)
        break
      default:
        break
    }
  }
  
  return (
    <UserRegistrationContainer>
      <UserRegistrationWrapper>
        <form onSubmit={data => handleSubmit(data)}>
          <label>First Name</label>
          <input
            type='text'
            value={firstName}
            placeholder='First Name'
            onChange={e => handleChange(e)}
            />
          <label>Last Name</label>
          <input
            type='text'
            value={lastName}
            placeholder='Last Name'
            onChange={e => handleChange(e)}
            />
          <label>Company</label>
          <input
            type='text'
            value={company}
            placeholder='Company'
            onChange={e => handleChange(e)}
            />
          <label>Email</label>
          <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={e => handleChange(e)}
            />
          <label>Username</label>
          <input
            type='text'
            value={userName}
            placeholder='Username'
            onChange={e => handleChange(e)}
            />
          <label>Password</label>
          <input
            type='text'
            value={password}
            placeholder='Password'
            onChange={e => handleChange(e)}
            />
          <input type='submit' />
          <button onClick={() => navigate('/homelab')}>Cancel</button>
        </form>
      </UserRegistrationWrapper>
    </UserRegistrationContainer>
  )
}