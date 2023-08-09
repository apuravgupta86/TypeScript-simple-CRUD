import mongoose from "mongoose";

mongoose
  .connect(`mongodb://127.0.0.1:27017/typescript_CRUD`, {
    retryWrites: true,
    w: "majority",
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Not connected");
  });
