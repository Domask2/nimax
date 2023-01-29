const formatTypeNumber = (type:string):string => {
  const economy = 'Эконом';
  const standard = 'Стандарт';
  const luxury = 'Люкс';
  let rusTypeNum = '';
  switch (type) {
    case 'economy':
      rusTypeNum = economy;
      break;
    case 'standard':
      rusTypeNum = standard;
      break;
    case 'luxury':
      rusTypeNum = luxury;
      break;
    default:
  }
  return rusTypeNum;
}

export default formatTypeNumber;