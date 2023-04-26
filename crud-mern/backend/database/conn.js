import { mongoose } from "mongoose";

// const uri = "mongodb://127.0.0.1:27017/crud";
const uri = "mongodb://127.0.0.1:27017/CrudApp"

mongoose.set("strictQuery", false);

export default async function connect() {
    await mongoose.connect(uri)
    .then(() => {
      console.log(`Database Connected`);
    })
    .catch(() => {
      console.log(`Database Error: No Connection`);
    });
}