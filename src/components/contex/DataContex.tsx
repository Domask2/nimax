import React, { createContext, useState, useContext, useMemo } from 'react'
import { InitValues, ValueType } from '../../type/type'

const iDataContextState = {
  data: InitValues,
  setValues: (state: ValueType) => {}
}

const DataContext = createContext(iDataContextState)

export const DataProvider = ({ children }: {children: React.ReactNode}) => {
  const [data, setData] = useState(iDataContextState.data)

  const setValues = (values: ValueType) => {
    setData(prevData => ({
      ...prevData,
      ...values,
    }))
  }

  const value = useMemo(() => ({ data, setValues }), []);

  return <DataContext.Provider value={value}>
    {children}
  </DataContext.Provider>
}

export const useData = () => useContext(DataContext)