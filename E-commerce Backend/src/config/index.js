import dotenv from "dotenv";

dotenv.config();
const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27017/ecomm",
  JWT_SECRET: process.env.JWT_SECRET || "yoursecret",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "30d",
  S3_ACCESS_KEY : AKIAY45LYGJXAPB5SPSD,
  S3_SECRET_ACCESS_KEY : ZUuS7l0ncjlWSUMUTLNXNYSgPLe6TbprlETVfFAK,
  S3_BUCKET_NAME : ecommerceakku2023,
  S3_REGION : ap-south-1

};

export default config