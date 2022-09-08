export const changeStrToUrl = str => {
  return str.toLowerCase().split(' ').join('_');
};

export const changeUrlToStr = url => {
  return url.split('_').join(' ')[0].toUpperCase() + 
    url.split('_').join(' ').slice(1);
};

export const reverseStr = str => {
  return str.split('-').reverse().join('.');
};

export const roundNumber = num => {
  const left = String(Math.round(num * 10)).split('')[0];
  const right = String(Math.round(num * 10)).split('')[1];
  return +(left + (+right === 0 ? '' : right)).split('').join('.');
}