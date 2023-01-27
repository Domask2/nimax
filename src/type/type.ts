export interface ValueType {
  countAdult: number,
  countChildren: number,
  countSmallChildren: number,
  typeNumber: string,
  countNumber: number,
  insurance: boolean,
}

export interface ErrorType {
  countAdult: string,
  countChildren: string,
  countSmallChildren: string,
  countNumber: string,
}

export const InitValues = {
  countAdult: 0,
  countChildren: 0,
  countSmallChildren: 0,
  typeNumber: 'economy',
  countNumber: 0,
  insurance: false,
}
export const InitErrors = {
  countAdult: '',
  countChildren: '',
  countSmallChildren: '',
  countNumber: '',
}

//   <input
// className='input'
// type='date'
// name='date'
// value={values.date}
// min={moment().format('YYYY-MM-DD')}
// max='2025-01-01'
// onChange={handleChange}
// />
