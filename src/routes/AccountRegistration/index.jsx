import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AccountRegistrationContainer, AccountRegistrationWrapper } from './index.styled'

export default function AccountRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()
  
  return (
    <>
      <AccountRegistrationContainer>
        <AccountRegistrationWrapper>
          <form onSubmit={(handleSubmit((values) => {
            console.log('submit', values)
          }))}>
            <div className='form-field'>
              <div>
                <label>First Name</label>
                <p>{errors.first_name?.message}</p>
              </div>
              <input
                type="text"
                {...register('first_name', { 
                  required: 'First Name is required',
                  maxLength: {
                    value: 20,
                    message: 'First Name must be less than 20 characters.'
                  }
                })}
                placeholder='First Name'
              />
            </div>
            <div className='form-field'>
              <div>
                <label>Last Name</label>
                <p>{errors.last_name?.message}</p>
              </div>
              <input type="text"
                {...register('last_name', {
                  required: 'Last Name is required',
                  maxLength: {
                    value: 20,
                    message: 'Last Name must be less than 20 characters.'
                  }
                })} 
                placeholder='Last Name'
              />
            </div>
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
              <input type="password"
                {...register('password', { 
                  required: 'Password is required',
                  min: {
                    value: 6,
                    message: 'Password must be at least 6 characters.'
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                    message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number.'
                  }
                })}
                placeholder='Password'
              />
              <div className='submit-btns'>
                <input type="submit"
                  value="Submit" />
                <input type="button"
                  value="Cancel"
                  onClick={() => navigate('/homelab')} />
              </div>
            </div>
          </form>
        </AccountRegistrationWrapper>
      </AccountRegistrationContainer>
    </>
  )
}