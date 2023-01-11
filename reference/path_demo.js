const path = require('path');

// Base file name
console.log("Base File Name :"+__filename);

console.log("Base Name: "+path.basename(__filename));

// Base Directory name

console.log("Base Directory Name: "+path.dirname(__filename));

// File extension

console.log("File Extension: "+path.extname(__filename));

// Create path object

console.log(path.parse(__filename));

// Fetch base name from path object

console.log(path.parse(__filename).base);

// concatenate path
// ../test/hello.html

console.log(path.join(__dirname,'test', 'hello.html'));
