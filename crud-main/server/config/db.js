const mongoose = require("mongoose");

// const connectToDB = async () => {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then((conn) => {
//       console.log(`Connecte DB: ${conn.connection.host}`);
//     })
//     .catch((err) => {
//       console.log(err.message);
//       process.exit(1);
//     });
// };

// module.exports = connectToDB;

// import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/CrudApp";


async function connect() {
    await mongoose.connect(uri)
    .then(() => {
      console.log(`Database Connected`);
    })
    .catch(() => {
      console.log(`Database Error: No Connection`);
    });
}

module.exports = connect;

