import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

interface InitStepOneType {
  email: string
  age: number
  child: number
}

const useForm = (callback: () => void, validate: (values : InitStepOneType) => {email:string, age:string, child:string}) => {
  const [values, setValues] = useState<{
    date: string,
    email: string, age: number,check:boolean, child: number}>({
    email: '', age: 0, check: false, child: 0, date: ''
  })
  const [errors, setErrors] = useState({
    email: '', age: '', child: '',
  })
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
    setValues((values) => ({ ...values, [event.target.name]: event.target.type === 'checkbox' ?  event.target.checked : event.target.value }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm