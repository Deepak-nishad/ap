const mongoose = require('mongoose');

const uri="mongodb://127.0.0.1:27017/inote"

async function connect() {
    await mongoose.connect(uri)
    .then(() => {
      console.log(`Database Connected`);
    })
    .catch(() => {
      console.log(`Database Error: No Connection`);
    });
}
module.exports=connect;