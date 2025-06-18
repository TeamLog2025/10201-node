import path from 'path';
const fp = "C:/Users/mossikim/Desktop/whereismyhome.txt";

console.log("filename : ", path.basename(fp));
console.log("ext : ", path.extname(fp));
console.log("directory : ", path.dirname(fp));