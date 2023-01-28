import moment from 'moment';

export type ValueType1 = {
    countAdult?: number;
    countChildren?: number;
    countSmallChildren?: number;
    typeNumber?: string;
    countNumber?: number;
    insurance?: boolean;
};

export type ValueType2 = {
    surname?: string;
    name?: string;
    patronymic?: string;
    phone?: string;
    date?: string;
};

export type ValueType = ValueType1 & ValueType2;

export type ErrorType1 = {
    countAdult: string;
    countChildren: string;
    countSmallChildren: string;
    countNumber: string;
    surname: string;
};

export type ErrorType2 = {
    surname: string;
    name: string;
    phone: string;
    date: string;
};

export type ErrorType = ErrorType1 & ErrorType2;

export const InitValues = {
    countAdult: 0,
    countChildren: 0,
    countSmallChildren: 0,
    typeNumber: 'economy',
    countNumber: 0,
    insurance: false,
};

export const InitValues2 = {
    surname: '',
    name: '',
    patronymic: '',
    phone: '',
    date: moment().format('YYYY-MM-DD'),
}

export const InitErrors = {
    countAdult: '',
    countChildren: '',
    countSmallChildren: '',
    countNumber: '',
    surname: '',
    name: '',
    phone: '',
    date: ''
};
