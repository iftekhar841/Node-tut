// gf = require('fs');
// gf.writeFileSync('gfs.js', 'before making anything in this world..');

// 2.This is directly importing modules 
// const fs = require('fs').writeFileSync;
// fs('hello.txt', 'This is directyly imprting modules');

// 3. This is http modules making the simple server ./

const http = require('http');
http.createServer((req , res) => {
      res.write('<h1 style = color:red> Hello Chochan, This is server page start</h1>');
      res.write('<h1 style = color:red> Hello Chochan, This is the tester page</h1>');
      res.end();
}).listen(4200);