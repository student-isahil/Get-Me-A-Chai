import mongoose from "mongoose";

const connectDb = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("Error: MONGO_URI environment variable is not defined");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDb;

