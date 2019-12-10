// https://stackoverflow.com/questions/21825157/internet-explorer-11-detection
// true on IE11
// false on Edge and other IEs/browsers.
const isIe11 = typeof window !== 'undefined' && !!window.MSInputMethodContext && !!document.documentMode;

export { isIe11 };
