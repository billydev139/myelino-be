import mongoose from "mongoose";
const authSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const admin = mongoose.model("admin", authSchema);

export default admin;
