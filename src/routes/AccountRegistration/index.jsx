import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserRegistrationContainer, UserRegistrationWrapper } from './index.styled.js'
import { formValidate } from '../utils/formValidate.js'
import ErrorPage from '../ErrorPage/index.jsx'

// write optimistic code that immediately responds to the user
// that the registration was successful upon form submission

const { VITE_BUCKETLAB_SERVER } = import.meta.env

export default function AccountRegistration() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [website, setWebsite] = useState('')
  const [company, setCompany] = useState('')
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors({ username: '', password: '', email: '', firstName: '', lastName: '' })

    try {
      const errors = formValidate('website', website)
      if (Object.keys(errors).length > 0) {
        setErrors(() => errors)
      }
    }
    catch (error) {
      console.log('Error: ', error)
    }

    fetch(`${VITE_BUCKETLAB_SERVER}/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ website, password, email, firstName, lastName, company })
    })
    .then(res => res.json())
    .then(res => {
      const { message } = res
      navigate('/homelab/login', {
        state: { email, message }
      })
    })
    .catch(err => {
      ErrorPage(err)
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name == 'website') {
      setWebsite(() => value)
    }

    if (name == 'password') {
      setPassword(() => value)
    }

    if (name == 'email') {
      setEmail(() => value)
    }

    if (name == 'firstName') {
      setFirstName(() => value)
    }

    if (name == 'lastName') {
      setLastName(() => value)
    }

    if (name == 'company') {
      setCompany(() => value)
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
            name='firstName'
            onChange={(e) => handleChange(e)}
            />
          <label>Last Name</label>
          <input
            type='text'
            value={lastName}
            placeholder='Last Name'
            name='lastName'
            onChange={(e) => handleChange(e)}
            />
          <label>Company</label>
          <input
            type='text'
            value={company}
            placeholder='Company'
            name='company'
            onChange={(e) => handleChange(e)}
            />
          <label>Email</label>
          <input
            type='email'
            value={email}
            placeholder='Email'
            name='email'
            onChange={(e) => handleChange(e)}
            />
          <label>Website</label>
          <input
            type='text'
            value={website}
            placeholder='Website'
            name='website'
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
      </UserRegistrationWrapper>
    </UserRegistrationContainer>
  )
}