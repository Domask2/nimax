import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { ErrorType, ValueType } from '../type/type'

const useForm = (callback: () => void, validate: (values: ValueType) => ErrorType, initValues: ValueType, initError: ErrorType) => {
  const [values, setValues] = useState(initValues)
  const [errors, setErrors] = useState(initError)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist()

    let value: string | number | boolean
    if (event.target.type === 'number') {
      value = Number(event.target.value)
    } else {
      value = event.target.value
    }

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : value,
    }))
  }

  return { handleChange, handleSubmit, values, errors }
}

export default useForm