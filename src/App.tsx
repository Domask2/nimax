import React, { useState } from 'react'
import Input from './components/input/Input'
import useFieldChange from './hooks/useFieldsChange'
import { initStepOneType } from './type/type'

const App = () => {
  const [stepOne, setStepOne] = useState<initStepOneType>({ name: '', soname: '' });
  const [error, setError] = useState({name: {required:true}});
  const handleChange = useFieldChange(setStepOne);

  return (
    <div className='App'>
      {stepOne.name}
      <Input placeholder="" label='name' type='text' value={stepOne.name} onChange={handleChange('name')} />
      <Input placeholder="" label='soname' type='text' value={stepOne.soname} onChange={handleChange('soname')} />
    </div>
  )
}

export default App
