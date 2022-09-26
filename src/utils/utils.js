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
};

export const hoursToMinutes = num => {
  const hours = Math.trunc(num / 60);
  const minutes = num % 60;

  return hours === 0
    ? minutes + " мин"
    : minutes === 0
    ? hours + " ч"
    : hours + " ч " + minutes + " мин"
};

export const getCardColors = num => {
  return num >= 8 ? 'green' 
    : num >= 7 ? 'yellowGreen' 
    : num >= 6 ? 'yellow' 
    : num >= 5 ? 'orange' 
    : 'red';
};

export const tabTitle = title => {
  return document.title = title;
};