import { InitErrors, ValueType, ValueType1, ValueType2 } from '../type/type'

const validate = (values: ValueType1 & ValueType2) => {
  // const errors = InitErrors
  const errors:any = {};

  // if(values.countAdult && values.countAdult > 0) {
  //
  // }

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

  if (values.countAdult && values.countSmallChildren) {

    const num = Math.ceil(values.countSmallChildren / values.countAdult)
    if (num > 3) {
      errors.countSmallChildren = 'На 1 взрослого не более 3 детей до 5 лет'
    }
  }

  return errors
}

export default validate