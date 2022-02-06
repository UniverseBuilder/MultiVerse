const lStorage = window.localStorage;

export const localStorage = {
  get: (key) => {
    return JSON.parse(lStorage.getItem(key));
  },
  set: (key, data) => {
    lStorage.setItem(key, JSON.stringify(data));
  },
  remove: (key) => {
    lStorage.removeItem(key);
  },
  clear: () => {
    lStorage.clear();
  },
};

const sStorage = window.sessionStorage;

export const sessionStorage = {
  get: (key) => {
    return JSON.parse(sStorage.getItem(key));
  },
  set: (key, data) => {
    sStorage.setItem(key, JSON.stringify(data));
  },
  remove: (key) => {
    sStorage.removeItem(key);
  },
  clear: () => {
    sStorage.clear();
  },
};
