import os from 'os';

console.log("플랫폼 : ", os.platform())
console.log("총 메모리 : ", (os.totalmem()/1024.0/1024/1024).toFixed(2), "GB");
console.log("가용 메모리 : ", (os.freemem()/1024.0/1024/1024).toFixed(2), "GB");
console.log("코어 수 : ", os.cpus().length);
