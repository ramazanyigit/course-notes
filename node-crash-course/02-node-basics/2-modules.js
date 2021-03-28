// Module loading without destructuring... 
const peopleModule = require('./2-people');
console.log(peopleModule.people, peopleModule.ages);

// With destructuring assignment you can import only required module pieces.
const { people, ages } = require('./2-people');
console.log(people, ages);

// Import os module
const os = require('os');
// Get OS platform and homedir of current user. 
console.log(os.platform(), os.homedir());