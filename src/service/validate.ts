import { InitErrors, ValueType, ValueType1, ValueType2 } from '../type/type'

const validate = (values: {}) => {
  const errors = InitErrors
  // if (!values.email) {
  //   errors.email = 'Email address is required'
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = 'Email address is invalid'
  // }
  // if (!values.age) {
  //   errors.age = 'Age is required'
  // } else if (values.age < 1) {
  //   errors.age = 'Age more 1'
  // }
  // if (values.age && values.child) {
  //   const num = Math.ceil(values.child / values.age)
  //   if (num > 3) {
  //     errors.child = 'Много мелких ублюдков'
  //   }
  // }
  return errors
}

export default validate