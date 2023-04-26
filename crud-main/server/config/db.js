const mongoose = require("mongoose");
// import mongoose from "mongoose";

// const connectToDB = async () => {
//   mongoose
//     .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/CrudApp")
//     .then((conn) => {
//       console.log(`Connected DB: ${conn.connection.host}`);
//     })
//     .catch((err) => {
//       console.log(err.message);
//       process.exit(1);
//     });
// };

// module.exports = connectToDB;

async function connectToDB() {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Database Connected`);
    })
    .catch(() => {
      console.log(`Database Error: No Connection`);
    });
}

module.exports = connectToDB;