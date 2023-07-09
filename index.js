// gf = require('fs');
// gf.writeFileSync('gfs.js', 'before making anything in this world..');

// 2.This is directly importing modules 
// const fs = require('fs').writeFileSync;
// fs('hello.txt', 'This is directyly imprting modules');

// 3. This is http modules making the simple server .
// const color = require('colors')
// console.log('hello my chochan boy'.yellow);
// const http = require('http');
// http.createServer((req , res) => {
//       res.write('<h1 style = color:red> Hello Chochan, This is server page start</h1>');
//       res.write('<h1 style = color:red> Hello Chochan, This is the tester page</h1>');
//       res.end();
// }).listen(4200);

// 4. make a server and create header and pass the api create and api with static data

// const http = require('http')
// const data = require('./data')
// http.createServer((req, res) => {
//       res.writeHead(200,{'content-type':'application/json'});
//       res.write(JSON.stringify(data));
//       res.end();
// }).listen(4000);

// const fs = require('fs')
// const input = process.argv;
// // fs.writeFileSync(input[2],input[3]);
// if(input[2] == 'add') 
// {
//       fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2] == 'remove') 
// {
//       fs.unlinkSync(input[3]);
// } 
// else {
//       console.log('invalid value provided');
// }


// 5. make files in  a folder, use path mudules, get the files name and print 
// const fs = require('fs');
// const path =  require('path');
// const dirPath = path.join(__dirname, 'files');
// // console.log(dirPath);
// for(i = 0; i < 5; i++) {
//       fs.writeFileSync(dirPath+'/hello'+i+'.txt', 'this is the files');
//       // fs.unlinkSync(`hello${i}.txt`, 'this is the files');
// }
// fs.readdir(dirPath,(err,files)=> {
//       files.forEach((item) => {
//             console.log(item);
//       })
// })


// 6 . Make file, Read file, update file, rename file, delete file like a crud operation.

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath =  `${dirPath}/operation.txt`;
// fs.writeFileSync(filePath,'this is crud operation file');

// fs.readFile(filePath,'utf8',(err,data) =>{
//       console.log('The data of files is reading:-',data);
// })

// fs.appendFile(filePath,'and data is append in the existing file', (err) => {
//       if(!err) console.log('file is updated sucessfully');
// })

// fs.rename(filePath, `${dirPath}/crud.txt`, (err) => {
//       console.log('filename is updated');
// })

// fs.unlinkSync(`${dirPath}/crud.txt`);




// 7. Ashynchronous Basic 
// console.log('first exe ..');
// console.log('second exe ..');  
// console.log('third exe ..');

// console.log('first exe ..');
// setTimeout(()=>{
//      console.log('second exe ..');   take 2 sec for loading
// },2000)
// console.log('third exe ..');

// drawback 

// let a = 10
// let b = 0;
// setTimeout(()=>{
//       b = 20;
// },2000)                
// console.log(a+b);

// Promise use for remove the drawback of above code 
// let a = 10
// let b = 0;
// let waitingData = new Promise ((resolve, reject)=>{
//       setTimeout(()=>{
//             resolve(20);
//       },2000)      
// })
// waitingData.then((data)=>{
//       b = data;
//       console.log(a+b);
// })

// Question :- Basic connect node js to mongodb ----------------*----------*++++++++

// const { MongoClient, Db } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'Node-tut';            **** Make database name as common
// const client = new MongoClient(url);

// async function getData () 
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collections = db.collection('Coder');
//     let response = await db.collections.find({}).toArray();
//     console.log(response);
// }
// getData();


//  Question :- Read data from mongodb ----------------*----------*++++++++

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'Node-tut';            **** Make database name as common
// const client = new MongoClient(url);

// async function dbConnect() 
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('Coder');
// }


//  *** promise handle showing below in two ways

// ******** 1. dbConnect().then((resp)=>{
//    resp.find({}).toArray().then((data) =>{
//     console.log('data:-', data);
//    });
//  });

// *******  2. const main = async () => {
//     console.log('function called');
//     let data = await dbConnect();
//     let res = await data.find().toArray();
//     console.log("🚀 ~ file: express.js ~ line 245 ~ main ~ data", res)
//  }
//  main();
