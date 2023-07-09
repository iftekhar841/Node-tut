const dbConnect = require('./mongodb');

const deleteData = async () => {
    console.log('delete data callled');
        const db = await dbConnect();
        const result = await db.deleteOne({branch:"Ele"});
        console.log("🚀 ~ file: updatedata.js ~ line 11 ~ updateData ~ result", result);
}
deleteData();