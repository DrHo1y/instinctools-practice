export const setItemToLocalStorage = (name, data) => {
  localStorage.setItem(name, data);
};

export const getItemInLocalStorage = (name) => {
  const localStorageData = localStorage.getItem(name);
  return localStorageData;
};

export const removeItemInLocalStorage = (name) => {
  localStorage.removeItem(name);
};

export const removeAllItemsOnLocalStorage = () => {
  localStorage.clear();
};
