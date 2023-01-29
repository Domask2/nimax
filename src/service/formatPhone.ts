const phoneFormat = (ph:string, plus = true) => {
  const startsWith = plus ? '+7' : '8';

  const s = ph.replace(/[^0-9]/g, '');

  let phone = s.replace(/[^0-9]/g, '');
  if (phone.startsWith('7') && plus) {
    phone = phone.substr(1);
  }
  if (phone.startsWith('8')) {
    phone = phone.substr(1);
  }

  return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, `${startsWith} $1 $2 $3 $4`);
};

export default phoneFormat;