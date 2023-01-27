import React, { FC, FormEvent } from 'react'

interface FormType {
  children: React.ReactNode,
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form: FC<FormType> = ({ children, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    className='form'
    noValidate
  >
    {children}
  </form>
)

export default Form