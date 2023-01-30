import { ValueType } from '../type/type';
import numWord from './numWord';

const strUser = (data: ValueType): string => {
    const strAdult =
        data.countAdult &&
        `${data.countAdult} ${numWord(data.countAdult, ['взрослый', 'взрослых'])}`;
    let strChildren = '';
    let strSmallChildren = '';
    if (data.countChildren) {
        strChildren =
            data.countChildren > 0
                ? `, ${data.countChildren} ${numWord(data.countChildren, [
                      'ребенок',
                      'ребенок',
                      'детей',
                  ])} от 12 лет`
                : '';
    }
    if (data.countSmallChildren) {
        strSmallChildren =
            data.countSmallChildren > 0
                ? ` и ${data.countSmallChildren} ${numWord(data.countSmallChildren, [
                      'ребенок',
                      'ребенок',
                      'детей',
                  ])} младше 5 лет`
                : '';
    }

    return strAdult + strChildren + strSmallChildren;
};

export default strUser;