import { Dispatch, SetStateAction } from 'react'
import { initStepOneType } from '../type/type'

const useFieldChange = (setState: Dispatch<SetStateAction<initStepOneType>>) =>
  (fieldName:string) => (fieldValue:string) => {
  setState((state) => ({
    ...state,
    [fieldName]: fieldValue,
  }));
};

export default useFieldChange;