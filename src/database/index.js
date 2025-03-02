import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const connectionURL = process.env.MONGODB_URL;
    await mongoose.connect(connectionURL);

    console.log("DB Connected Successfully to test database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default connectToDB;
