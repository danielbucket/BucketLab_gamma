import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserRegistrationContainer, UserRegistrationWrapper } from './index.styled.js'
import { validateForm } from './validateForm.js'
import ErrorPage from '../ErrorPage/index.jsx'

// write optimistic code that immediately responds to the user
// that the registration was successful upon form submission

const { VITE_BUCKETLAB_SERVER } = import.meta.env

export default function AccountRegistration() {
  const [first_name, setFirstName] = useState('Edward')
  const [last_name, setLastName] = useState('Abbey')
  const [email, setEmail] = useState('edward@abbey.com')
  const [website, setWebsite] = useState('www.edwardabbey.com')
  const [company, setCompany] = useState('Desert Solitaire')
  const [password, setPassword] = useState('password')
  const [errors, setErrors] = useState({
    first_name: [], last_name: [], email: [], password: [], confirm_password: [] 
  })
  const navigate = useNavigate()

  const errorCheck = (e) => {
    const error = validateForm(e.target.name, e.target.value)
    if (error) {
      setErrors(
        (errors) => Object.assign({}, errors, error)
      ) 
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    for (const key in errors) {
      if (errors[key].length > 0) {
        // alert('Please fix the errors in the form')
        return
      }
    }

    fetch(`${VITE_BUCKETLAB_SERVER}/account/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ website, password, email, first_name, last_name, company })
    })
    .then(res => res.json())
    .then(res => {
      const { first_name, message } = res
      navigate('/homelab/login', {
        state: { first_name, message }
      })
    })
    .catch(err => {
      ErrorPage(err)
    })
  }
  
  return (
    <UserRegistrationContainer>
      <UserRegistrationWrapper>
        <form onSubmit={data => handleSubmit(data)}>

          <div className='form-field'>
            <div className='label-container'>
              <label>First Name</label>
              <div className='error-alert'>
                {
                  errors.first_name.map((error, index) => {
                    return <p key={index}>{error}</p>
                  })
                }
              </div>
            </div>
            <input
              type='text'
              value={first_name}
              placeholder='First Name'
              name='first_name'
              onChange={(e) => {
                errorCheck(e)
                setFirstName(e.target.value)
              }} />
          </div>

          <div className='form-field'>
            <div className='label-container'>
              <label>Last Name</label>
              <div className='error-alert'>
                {
                  errors.last_name.map((error, index) => {
                    return <p key={index}>{error}</p>
                  })
                }
              </div>
            </div>
            <input
              type='text'
              value={last_name}
              placeholder='Last Name'
              name='last_name'
              onChange={(e) => {
                errorCheck(e)
                setLastName(e.target.value)
              }} />
          </div>

          <div className='form-field'>
            <div className='label-container'>
              <label>Company</label>
            </div>
            <input
              type='text'
              value={company}
              placeholder='Company'
              name='company'
              onChange={(e) => {
                errorCheck(e)
                setCompany(e.target.value)
              }} />
          </div>

          <div className='form-field'>
            <div className='label-container'>
              <label>Website</label>
            </div>
            <input
              type='text'
              value={website}
              placeholder='Website'
              name='website'
              onChange={(e) => {
                errorCheck(e)
                setWebsite(e.target.value)
              }} />
          </div>

          <div className='form-field'>
            <div className='label-container'>
              <label>Email</label>
            </div>
            <div className='error-alert'>
              {
                errors.email.map((error, index) => {
                  return <p key={index}>{error}</p>
                })
              }
            </div>
            <input
              type='email'
              value={email}
              placeholder='Email'
              name='email'
              onChange={(e) => {
                errorCheck(e)
                setEmail(e.target.value)
              }} />
          </div>
          <div className='form-field'>
            <div className='label-container'>
              <label>Password</label>
              <div className='error-alert'>
                {
                  errors.password.map((error, index) => {
                    return <p key={index}>{error}</p>
                  })
                }
              </div>
            </div>
            <input
              type='text'
              value={password}
              placeholder='Password'
              name='password'
              onChange={(e) => {
                errorCheck(e)
                setPassword(e.target.value)
              }} />
          </div>
          <input type='submit' />
          <button onClick={() => navigate('/homelab')}>Cancel</button>
        </form>
      </UserRegistrationWrapper>
    </UserRegistrationContainer>
  )
}