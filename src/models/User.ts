import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  // username: { type: String, required: true },

  email: { type: String },
  name: { type: String },
  photo: { type: String, lowercase: true },
  location: { type: Object },

  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  otp: { type: String },

  device: { type: String },
  block: { type: Boolean },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

export default model("User", UserSchema);
