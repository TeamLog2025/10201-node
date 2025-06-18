import fs from 'fs';
fs.writeFile('input.txt', 'blyattt... i can\' sleep... it\'s already 5:07 (am)...', (err)=>{
    fs.readFile('input.txt', 'utf-8', (data)=>{
        console.log('file : ', data);
    });
});

fs.readdir('C:\\\\Users\\', (err, files) => {
    if(err){ throw(err);}
    files.forEach(file => {
        console.log(file);
    });
});