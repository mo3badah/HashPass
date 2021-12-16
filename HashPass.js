const {pbkdf2} = require('crypto');
const start = Date.now();
pbkdf2('password','mySecret',10000,1000,'sha256',_=>{
    console.log('done in :',Date.now()-start);
});
console.log('I would call first',Date.now()-start);
