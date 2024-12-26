export const validateForm = (name, value) => {
  let errors = {
    first_name: [],
    last_name: [],
    email: [],
    password: []
  }

  switch (name) {
    case 'first_name':
      if (value === '') {
        errors.first_name.push('First Name is required')
      }
    break
    case 'last_name':
      if (value === '') {
        errors.last_name.push('Last Name is required')
      }
    break
    case 'email':
      if (value === '') {
        errors.email.push('Email is required')
      }
    break
    case 'password':
      if (value === '') { 
       errors.password.push('Password is required')
      }
      if (value.length < 8) {
        errors.password.push('Password must be at least 8 characters')
      }
      if (!value.match(/[a-z]/)) {
        errors.password.push('Password must contain at least one lowercase letter')
      }
      if (!value.match(/[A-Z]/)) {
        errors.password.push('Password must contain at least one uppercase letter')
      }
      if (!value.match(/[0-9]/)) {
        errors.password.push('Password must contain at least one number')
      }
    break
  }
  return errors
}