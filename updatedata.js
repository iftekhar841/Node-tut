const dbConnect = require('./mongodb');

const updateData = async () => {
    console.log('updated data callled');
        const db = await dbConnect();
        const result = db.updateMany({name:"anwar"},{$set: {name:"CEO", branch:"MANAGING DIRECTOR", company:"Stationaries"}});
        console.log("🚀 ~ file: updatedata.js ~ line 11 ~ updateData ~ result",await result);
}
updateData();