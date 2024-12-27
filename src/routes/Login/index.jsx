import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LoginContainer, LoginWrapper, StyledForm } from './index.styled'
import ErrorPage from '../ErrorPage'

const { VITE_BUCKETLAB_SERVER } = import.meta.env

export default function Login() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: email.length ? email : '',
    }
  })
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.email && location.state?.message) {
      setEmail(() => location.state.email)
      setMessage(() => location.state.message)
    }
  }, [location.state])

  const submitForm = (values) => {
    fetch(`${VITE_BUCKETLAB_SERVER}/account/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ values })
        })
        .then((res) => res.json())
        .then((res) => {
          console.log('values: ', res)
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
    <>
      <LoginContainer>
        <LoginWrapper>
          <StyledForm onSubmit={(handleSubmit((values) => submitForm(values)))}>
            {message.length > 0 ? <p>{ message }</p> : null}
            <div className='fields-container'>

              <div className='form-field'>
                <div>
                  <label>Email</label>
                  <p>{errors.email?.message}</p>
                </div>
                <input type="email"
                  {...register('email', { 
                    required: 'An email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Please enter a valid email.'
                    }
                  })}
                  placeholder='Email'
                />
              </div>

              <div className='form-field'>
                <div>
                  <label>Password</label>
                  <p>{errors.password?.message}</p>
                </div>
                <input type='password'
                  {...register('password', {
                    required: 'Password is required.'
                  })}
                  placeholder='Password'
                />
              </div>

            </div>

            <div className='submit-btns'>
              <input type="submit"
                value="Submit" />
              <input type="button"
                value="Cancel"
                onClick={() => navigate('/homelab')} />
            </div>

          </StyledForm>
          <div className='register-new'>
            <p>Don't have an account?</p>
            <button onClick={() => navigate('/homelab/register')}>Make one here.</button>
          </div>
        </LoginWrapper>
      </LoginContainer>
    </>
  )
}