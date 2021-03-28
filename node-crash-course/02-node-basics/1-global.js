// Log global object
// console.log(global);

// Example of setTimeout on global variable.
// global.setTimeout(() => {
//   console.log("in the timeout");
// }, 3000);

// In node js global context is "global" variable, we do not have to use global prefix.
setTimeout(() => {
  console.log("in the timeout");
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log('in the interval');
}, 1000);

// Some global constants
console.log(`Directory path: ${__dirname}`);
console.log(`File path: ${__filename}`);