import { economy, luxury, standard, ValueType } from '../type/type'

const getPrice = (values: ValueType): number => {
    let priceNumber = 0;
    const { countAdult, countChildren, insurance, countNumber } = values;
    switch (values.typeNumber) {
        case 'economy':
            priceNumber = economy;
            break;
        case 'standard':
            priceNumber = standard;
            break;
        case 'luxury':
            priceNumber = luxury;
            break;
        default:
    }

    const priceAdult = countAdult && countAdult * priceNumber;
    const priceChildren =
        countChildren && countChildren > 0 ? countChildren * ((priceNumber / 100) * 50) : 0;
    let totalPrice = priceAdult && countNumber && (priceAdult + priceChildren) * countNumber;

    if (insurance) {
        const insurancePrice = totalPrice && (totalPrice / 100) * 10;
        totalPrice = totalPrice && insurancePrice && totalPrice + insurancePrice;
    }

    return totalPrice && totalPrice ? totalPrice : 0;
};

export default getPrice;