export const debounce = (callback, ms = 1000) => {
  let timeout;
  return (arg) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(arg);
    }, ms);
  };
};
