import React, { useState } from 'react'
import Input from './components/input/Input'
import useFieldChange from './hooks/useFieldsChange'
import { initStepOneType } from './type/type'
import useForm from './hooks/useForm'

export interface InitStepOneType {
  email: string
  age: number
  child: number
}

const App = () => {
  function login() {
    console.log('No errors, submit callback called!')
  }

  function validate(values: InitStepOneType) {
    const errors: {email:string, age:string, child:string} = {email:'', age:'', child:''}
    if (!values.email) {
      errors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid'
    }
    if(!values.age) {
      errors.age = 'Age is required'
    } else if (values.age < 1) {
      errors.age = 'Age more 1'
    }
    if(values.age && values.child) {
      const num = Math.ceil( values.child / values.age );
      if (num > 3) {
        errors.child = 'Много мелких ублюдков'
      }
    }
    return errors
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate)

  console.log(values,errors);

  return (
    <div className='App'>

      {/* {stepOne.name} */}
      {/* <Input placeholder="" label='name' type='text' value={stepOne.name} onChange={handleChange('name')} /> */}
      {/* <Input placeholder="" label='soname' type='text' value={stepOne.soname} onChange={handleChange('soname')} /> */}
      <form onSubmit={handleSubmit} noValidate>
        <input
          autoComplete='off'
          className={`input ${errors?.email && 'is-danger'}`}
          type='email' name='email'
          onChange={handleChange}
          value={values.email || ''}
        />
        <span>{errors.email}</span>

        <input
          autoComplete='off'
          className={`input ${errors?.age && 'is-danger'}`}
          type='number' name='age'
          onChange={handleChange}
          value={values.age || ''}
        />
        <span>{errors.age}</span>


        <input
          autoComplete='off'
          className={`input ${errors?.child && 'is-danger'}`}
          placeholder={errors.child}
          type='number' name='child'
          onChange={handleChange}
          value={values.child || ''}
          required
        />

        <input
          type='checkbox'
          name='check'
          defaultChecked={values.check || false}
          onChange={handleChange}
        />

        <input
          type='radio'
          name='rad'
          value="1"
          onChange={handleChange}
        />

        <input
          type='radio'
          name='rad'
          value="2"
          onChange={handleChange}
        />

        <button type='submit' className='button is-block is-info is-fullwidth'>Login</button>
      </form>
    </div>
  )
}

export default App
