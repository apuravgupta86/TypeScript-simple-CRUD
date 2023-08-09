import mongoose, { Document, model } from "mongoose";

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
  contactNo: number;
  profile_img: string;
}

const fieldSchema = new mongoose.Schema(
  {
    profile_img: {
      type: String,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contactNo: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model<IUser>("user_detail", fieldSchema);

export default User;
