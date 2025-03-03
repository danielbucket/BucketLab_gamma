import { set, useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LoginContainer, LoginWrapper, StyledForm } from './index.styled';

console.log('import.meta.env: ', import.meta.env);
console.log('import.meta: ', import.meta);

const { VITE_BUCKETLAB_API_DEV } = import.meta.env;

const isDev = import.meta.env.DEV;
const API_URL = isDev ? VITE_BUCKETLAB_API_DEV : 'https://bucketlab.io/api';

export default function Login() {
  const [isNew, setIsNew] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.isNew) {
      setIsNew(() => location.state.isNew);
      setEmail(() => location.state.email);
      setMessage(() => `An account with the email ${location.state.email} has been created.`);
    };

    if (!location.state?.isNew && location.state?.email) {
      setIsNew(() => false);
      setEmail(() => location.state.email);
      setMessage(() => `An account with the email ${location.state.email} already exists.`);
    }
  }, [location.state]);

  const submitForm = (values) => {
    fetch(`${API_URL}/accounts/login`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values })
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 'fail' && res.fail_type === 'not_found') {
        setMessage(() => res.message);
        return;
      };

      if (res.status === 'fail' && res.fail_type === 'incorrect_password') {
        setMessage(() => res.message);
        return;
      };
      
      navigate('/laboratory', {
        state: res
      });
    })
    .catch((err) => {
      setError(() => err);
    });
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <StyledForm onSubmit={(handleSubmit((values) => submitForm(values)))}>
            { isNew !== null && <p>{message}</p> }
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
                  defaultValue={email !== '' ? email : ''}
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
                value="Login" />
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
  );
};