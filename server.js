const http = require('http');
const pid = process.pid;



http.createServer((req, res) => {
    for(let i = 0; i<1e7; i++) { 
        res.end(`Handled by process ${pid}`);
    }
}).listen(8585, () => {
    console.log(`Started process ${pid}`);
});

setTimeout(() => {
    process.exit(1) // death by random timeout
  }, Math.random() * 10000);