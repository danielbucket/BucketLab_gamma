import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserRegistrationContainer, UserRegistrationWrapper } from './index.old.styled.js'
import { useValidateFormField } from './useValidateFormField.jsx'
import ErrorPage from '../ErrorPage/index.jsx'

// write optimistic code that immediately responds to the user
// that the registration was successful upon form submission

const { VITE_BUCKETLAB_SERVER } = import.meta.env

export default function AccountRegistration() {
  const [first_name, setFirstName] = useState('Edward')
  const [last_name, setLastName] = useState('Abbey')
  const [company, setCompany] = useState('Desert Solitaire')
  const [website, setWebsite] = useState('www.edwardabbey.com')
  const [email, setEmail] = useState('edward@abbey.com')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    first_name: [], last_name: [], email: [], password: [], confirm_password: [] 
  })
  const navigate = useNavigate()
  const validateFormField = useValidateFormField()
// console.log('validateFormField', typeof validateFormField)

  const errorCheck = (e) => {

    const error = validateFormField(e.target.name, e.target.value)
    
    if (error) {
      setErrors((prevErrors) => {
        error.forEach(error => prevErrors[e.target.name].push(error))
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    for (const key in errors) {
      if (errors[key].length > 0) {
        return
      }
    }

    fetch(`${VITE_BUCKETLAB_SERVER}/account/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ first_name, last_name, company, website, email, password })
    })
    .then((res) => res.json())
    .then((res) => {
      const { first_name, message } = res
      navigate('/homelab/login', {
        state: { first_name, message }
      })
    })
    .catch((err) => {
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
              onFocus={(e) => errorCheck(e, 'last_name')}
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
                setWebsite(e.target.value)
              }} />
          </div>
          <div className='form-field'>
            <div className='label-container'>
              <label>Email</label>
              <div className='error-alert'>
                {
                  errors.email.map((error, index) => {
                    return <p key={index}>{error}</p>
                  })
                }
              </div>
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

            <input type='text' value={password} placeholder='Password' name='password'
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