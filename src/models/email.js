import mongoose from "mongoose";
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
});

const Emails = mongoose.model("Email", emailSchema);

export default Emails;
