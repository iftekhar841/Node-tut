// const dbConnect = require('./mongodb');
// const mongodb = require('mongodb');
// const express = require('express');
// const app = express();

//  app.use(express.json());                               // used for take the request from the body

//  app.get('/',async(req, resp) =>{
//     const db =  await dbConnect();                       // here db connection
//     const data = await db.find().toArray();              // take data from the database
//     console.log("🚀 ~ file: api.js ~ line 11 ~ app.get ~ data", data)
//     resp.send({data})                                    // sending the data to client side
//  })
 
//  app.post('/', async(req, resp) => {
//     const db = await dbConnect();
//     const data = await db.insertOne(req.body)             // Save the data to the database
//     resp.send(data)                                       // send the data
//  })

// app.put('/:name', async (req, resp) => {
//     let db = await dbConnect();
//     const result = await db.updateOne(                 // Updated data on the basis of name 
//     {name : req.params.name},                          // Take the data from the params and update it..
//     {$set:req.body}
       
    
//    //  {name : req.body.name},                           // Take the data from the body and update it..
//    //  {$set:req.body}                             

//     )
//     resp.send({result:"Successfully updated data..."});
// })

// app.delete('/:id', async (req, resp) => {
//      console.log(req.params.id);                             
//      const db = await dbConnect();
//      let result = await db.deleteOne(
//                           {_id: new mongodb.ObjectId(req.params.id)}    // instance of mongodb objectId
//                          );
//     resp.send(result);
// })

//  app.listen(3000 , () => {
//     console.log('server running at 3000 port no.');
//  });
// let arr = [2,7,11,15];
// let target = 9;

// for(var i=0; i<arr.length; i++) {
//    for(var j=i+1; j<arr.length;j++) {
//       if(arr[i]+arr[j] === target) {
//          console.log('i:',i , 'j:', j);
//       }
//    }
// }
