import * as React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import StepOne from '../page/StepOne'

const Routing = () => (
  <Routes>
    <Route path='/' element={<StepOne />} />
  </Routes>
)

export default Routing