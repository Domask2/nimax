import React, { createContext, useState, useContext, useMemo } from 'react'
import { InitValues, InitValues2, ValueType1, ValueType2 } from '../../type/type'

const iDataContextState = {
    data: { ...InitValues, ...InitValues2 },
    setValues: (state: ValueType1 | ValueType2) => {},
};

const DataContext = createContext(iDataContextState)

export const DataProvider = ({ children }: {children: React.ReactNode}) => {
  const [data, setData] = useState(iDataContextState.data)

  const setValues = (values: ValueType1 | ValueType2) => {
    setData(prevData => ({
      ...prevData,
      ...values,
    }))
  }

  const value = useMemo(() => ({ data, setValues }), [setValues, setData]);

  return <DataContext.Provider value={ value }>
    {children}
  </DataContext.Provider>
}

export const useData = () => useContext(DataContext)