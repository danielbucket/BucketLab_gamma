export const formValidate = (name, value) => {
  let errors = {}
  switch (name) {
    case 'username':
      if (value === '') {
        errors = { ...errors, username: 'Username is required' }
      }
      break
    case 'password':
      if (value === '') {
        errors = { ...errors, password: 'Password is required' }
      }
      if (value.length < 8) {
        errors = { ...errors, password: 'Password must be at least 8 characters' }
      }
      break
    case 'email':
      if (value === '') {
        errors = { ...errors, email: 'Email is required' }
      }
      break
    case 'firstName':
      if (value === '') {
        errors = { ...errors, firstName: 'First Name is required' }
      }
      break
    case 'lastName':
      if (value === '') {
        errors = { ...errors, lastName: 'Last Name is required' }
      }
      break
    default:
      break
  }
  return errors
}