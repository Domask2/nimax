import React, { useState } from 'react'
import Input from './components/input/Input'

const App = () => {
  const [name, setName] = useState('');

  return <div className='App'>
    {name}
    <Input label='name' type='text' value={name} onChange={setName} />
  </div>
}

export default App
