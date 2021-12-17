const {pbkdf2} = require('crypto');
const { createServer } = require('http');
const Process = require("process");
const start = Date.now();
const hash = () => {
    pbkdf2('password','mySecret',10000,1000,'sha256',_=>{
        console.log('done in :',Date.now()-start);
    });
}
const lis = (port) => {
    createServer().listen(port,()=>{
        console.log('listening to port: ',port,Date.now()-start)
    })
}
console.log('I would call first',Date.now()-start);
lis(3000);
// set immediate function
setImmediate(()=>{
    console.log('Set Immediate',Date.now()-start)
});
Process.nextTick(()=>{
    console.log('next tick',Date.now()-start)
});
lis(3001);
lis(3002);
lis(3003);
hash();
hash();
