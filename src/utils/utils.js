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
  return num.toFixed(1).split('.')[1] === 0 
    ? +num.toFixed(1).split('.')[0] 
    : +num.toFixed(1).split('.').join('.');
}