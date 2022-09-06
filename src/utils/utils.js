export const changeStrToUrl = str => {
  return str.toLowerCase().split(' ').join('_');
};

export const changeUrlToStr = url => {
  return url.split('_').join(' ')[0].toUpperCase() + 
    url.split('_').join(' ').slice(1);
};