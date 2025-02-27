import { useState } from 'react'
  
export function useValidateFormField(name, value) {
  const [errors, setErrors] = useState({})

  const validateFirstName = (first_name) => {
    if (first_name === '') {
      setErrors((prevErrors) => {
        Object.assign(prevErrors, { first_name: ['First name is required'] })
      })
    }
  }

  const validateLastName = (last_name) => {
    if (last_name === '') {
      setErrors((prevErrors) => {
        Object.assign(prevErrors, { last_name: ['Last name is required'] })
      })
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === '') {
      setErrors((prevErrors) => {
        Object.assign(prevErrors, { email: ['Email is required'] })
      })
    }
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => {
        Object.assign(prevErrors, { email: ['Email is invalid'] })
      })
    }
    if (value === '') {
      setErrors((prevErrors) => {
        Object.assign(prevErrors, { email: ['Email is required'] })
      })
    }
  }

  const validatePassword = (password) => {
    if (password === '') {
      setErrors((prevErrors) => {
        Object.assign(prevErrors, { password: ['Password is required'] })
      })
    }

    if (password.length < 8) {
      setErrors((prevErrors) => {
        Object.assign(prevErrors, { password: ['Password must be at least 8 characters'] })
      })
    }
    if (!password.match(/[a-z]/)) {
      setErrors((prevErrors) => {
        Object.assign(prevErrors, { password: ['Password must contain at least one lowercase letter'] })
      })
    }

    if (!password.match(/[A-Z]/)) {
      setErrors((prevErrors) => {
        Object.assign(prevErrors, { password: ['Password must contain at least one uppercase letter'] })
      })
    }
    if (!password.match(/[0-9]/)) {
      setErrors((prevErrors) => {
        Object.assign(prevErrors, { password: ['Password must contain at least one number'] })
      })
    }
  }

  switch (name) {
    case 'first_name':
      validateFirstName(value)
    break
    case 'last_name':
      validateLastName(value)
    break
    case 'email':
      validateEmail(value)
    break
    case 'password':
      validatePassword(value)
    break
  }

  return errors
}