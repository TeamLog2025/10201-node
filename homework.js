import fs from 'fs';

fs.readdir(process.cwd(), (err, files)=>{
    if(err){throw(err)};
    files.forEach(file => {
        console.log(file);
    })
});