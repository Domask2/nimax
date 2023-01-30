export const economy = 1800;
export const standard = 2800;
export const luxury = 4000;

export type ValueTypeStepOne = {
    countAdult?: number;
    countChildren?: number;
    countSmallChildren?: number;
    typeNumber?: string;
    countNumber?: number;
    insurance?: boolean;
    totalPrice?: number;
};

export type ValueTypeStepTwo = {
    surname?: string;
    name?: string;
    patronymic?: string;
    phone?: string;
    date?: string;
};

export type ValueType = ValueTypeStepOne & ValueTypeStepTwo;

export type ErrorTypeStepOne = {
    countAdult?: string;
    countChildren?: string;
    countSmallChildren?: string;
    countNumber?: string;
};

export type ErrorTypeStepTwo = {
    surname?: string;
    name?: string;
    phone?: string;
    date?: string;
};

export type ErrorType = ErrorTypeStepOne & ErrorTypeStepTwo;

export const InitValuesStepOne = {
    countAdult: 1,
    countChildren: 0,
    countSmallChildren: 0,
    typeNumber: 'economy',
    countNumber: 1,
    insurance: false,
    totalPrice: economy,
};

export const InitValuesStepTwo = {
    surname: '',
    name: '',
    patronymic: '',
    phone: '',
    date: '',
};
