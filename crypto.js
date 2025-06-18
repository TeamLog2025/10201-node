import crypto from 'crypto';

const arr = "asdf";
console.log(crypto.createHash('sha256').update(arr).digest('hex'));