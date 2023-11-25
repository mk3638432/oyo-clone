import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://mk3638432:b5yioYYDfPDUwRX2@cluster0.smpkkup.mongodb.net/oyo",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("DB connected successfully");
};

export default connectDb;
