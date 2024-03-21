export const saveToStorage = ({ data, key }) => {
  if (data === null) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, data);
  }
};

export const getFromStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeToStorage = (key) => {
  localStorage.removeItem(key);
};
