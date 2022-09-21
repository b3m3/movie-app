export const setLStorage = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const getLStorage = key => {
  const res = localStorage.getItem(key)

  if (res) {
    return JSON.parse(res);
  }

  return {};
};