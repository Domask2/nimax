export const economy = 1800;
export const standard = 2800;
export const luxury = 4000;

export type ValueType1 = {
    countAdult?: number;
    countChildren?: number;
    countSmallChildren?: number;
    typeNumber?: string;
    countNumber?: number;
    insurance?: boolean;
    totalPrice?: number
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
    countAdult?: string;
    countChildren?: string;
    countSmallChildren?: string;
    countNumber?: string;
};

export type ErrorType2 = {
    surname?: string;
    name?: string;
    phone?: string;
    date?: string;
};

export type ErrorType = ErrorType1 & ErrorType2;

export const InitValues = {
    countAdult: 1,
    countChildren: 0,
    countSmallChildren: 0,
    typeNumber: 'economy',
    countNumber: 1,
    insurance: false,
    totalPrice: economy
};

export const InitValues2 = {
    surname: '',
    name: '',
    patronymic: '',
    phone: '',
    date: '',
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
