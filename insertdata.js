// const dbConnect = require('./mongodb');

// const insertData = async () => {
//     console.log('inserted data callled');
//         const db = await dbConnect();
//         const result = await db.insert(
//            [
//             {name:"anwar",branch:"Teacher",specilization:"Mathematics",company:"Goverment"},
//             {name:"akhtar",branch:"Technicians",specilization:"Management",company:"Contract base"},
//             {name:"aftab",branch:"Technicians",specilization:"Management",company:"Contract base"}
//             ]);
//         if(result.acknowledged) {
//             console.log('data is inserted successfully');
//         }
// }
// insertData();