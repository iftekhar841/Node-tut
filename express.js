// const express = require('express');

// const app = express();

// app.get('',(req,res)=>{
//     // console.log('GET  respone from the browser', req.query.name);
//     // res.send('Hello, This is dashboard page:-'+req.query.name);
//     res.send(`<h1> this is the dashboard page</h1><a href = "/About"> Go to about page</a>
//     `);
// })
// app.get('/About',(req,res)=>{
//     res.send(`
//     <input type = 'text' placeholder = 'Your name' value = ${req.query.name}/> 
//     <button>click me</button></br>
//     <a href = '/'> Go to Home page</a>
//     `);
// })

// app.get('/Help',(req,res)=>{
//     res.send({
//      name: 'iftekhar',
//      email: 'iftekhar@yopmail.com'
// });
// })  
// app.listen(4200);

// Question :- Make folder for html and access it 2. make html file 3. load htlm file 
// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname,'public');

// // app.use(express.static(publicPath));

// app.listen(4200);


// Question :- How to remove html extension from URL 2. Make 404 page and load it 
// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname,'public');

// app.get('', (req, res)=> {
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/about', (req, res)=> {
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('*', (req, res)=> {
//     res.sendFile(`${publicPath}/404.html`)
// })
// app.listen(4200);


// Question :- How to Make loop in ejs 2. Make Header files 3.show common header files 

// const express = require('express');

// const app = express();

// app.set('view engine', 'ejs');

// app.get('/profile', (req, res)=> {
//     const user = {
//         name : 'Md iftekhar Alam',
//         Email: 'mdiftekhar42@yopmail.com',
//         Contact : '9971787411',
//         Skills : ['Node', 'React','javaScript','Express','Mongo', 'GraphQl']
//     }
//     res.render('profile',{user});
// })

// app.get('/login', (req, res)=> {  
//     res.render('login');
// })

// app.listen(4200);




// Question :- 1. How to make middleware as well as apply on that 

// const express = require('express');
// const app = express ();
 
// const middleFilter = (req,res,next) => {
//    if(!req.query.age) 
//    {
//      res.send('Please provide age !')
//    }
//    else if(req.query.age<18) 
//    {
//      res.send('you cannot access this page !')
//    }
//    else 
//    {
//     next();
//    }
  
// }
// app.use(middleFilter);

// app.get('/',(req, res)=>{

//     res.send("welcome to home page");
// })
// app.get('/users',(req, res)=>{

//     res.send("welcome to user page");
// });

// app.get('/About', (req, res)=>{

//     res.send("welcome to user page");
// })
// app.listen(4200);



// Question :- Route level middleware 2. apply middleware on sigle Route/multiple 3. make middleware in
//  diffrent file 4. apply middleware in group of file

// Single level middleware apply or multiple route
// const express = require('express');
// const app = express ();
 
// const middleFilter = (req,res,next) => {
//    if(!req.query.age) 
//    {
//      res.send('Please provide age !')
//    }
//    else if(req.query.age<18) 
//    {
//      res.send('you cannot access this page !')
//    }
//    else 
//    {
//     next();
//    }
  
// }
// app.get('/',middleFilter,(req, res)=>{

//     res.send("welcome to home page");
// })
// app.get('/users',(req, res)=>{

//     res.send("welcome to user page");
// });

// app.get('/About',middleFilter, (req, res)=>{

//     res.send("welcome to user page");
// })
// app.listen(4200);

// // @:----------------------------------make middleware in diffrent file apply below  
// const express = require('express');
// const middleFilter = require('./middleware')
// const app = express (); 
 
// app.get('/',middleFilter,(req, res)=>{

//     res.send("welcome to home page");
// })
// app.get('/users',(req, res)=>{

//     res.send("welcome to user page");
// });

// app.get('/About',middleFilter, (req, res)=>{

//     res.send("welcome to user page");
// })
// app.listen(4200);




// @:----------------------------------make middleware of group of route and apply below  
// const express = require('express');
// const app = express (); 

// const middleFilter = require('./middleware')   // importing middleware from the middleware file
// const route = express.Router();
 
// route.use(middleFilter);    
// route.get('/',(req, res)=>{

//     res.send("welcome to home page");
// })
// app.get('/users',(req, res)=>{

//     res.send("welcome to user page");
// });

// route.get('/About', (req, res)=>{

//     res.send("welcome to user page");
// })
// app.use('/',route);
// app.listen(4200);



// var x = "1011";
// var  rem, sum=0;

// for(var i=0; x!=0; i++) 
// {
//        rem = x%10;
//        sum = sum +rem * Math.pow(2,i);
//        x = x/10;
// }
// console.log("sum:-", sum);


// const dbConnect = require('./mongodb')
// dbConnect().then((resp)=>{
//    resp.find({}).toArray().then((data) =>{
//     console.log('data:-', data);
//    });
//  });


// const main = async () => {
//    console.log('function called');
//    let data = await dbConnect();
//    let res = await data.find({name:"azhar"}).toArray();
//    console.log("🚀 ~ file: express.js ~ line 245 ~ main ~ data", res)
// }
// main();