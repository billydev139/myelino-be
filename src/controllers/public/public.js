import Emails from "../../models/email.js";

export const subscribeEmail = async (req, res) => {
  let { email } = req.body;
  let data = await Emails.find({ email: email });
  if (data.length > 0) {
    return res.status(400).json({
      message: "Email Already Exists",
    });
  }
  const newEmail = new Emails({
    email: email,
  });
  await newEmail.save();
  return res.status(201).json({ message: "Email Sent Successfully" });
};

export const getSubscribeEmail = async (req, res) => {
  try {
    let allEmails = await Emails.find();
    return res.status(200).json({ message: "Get All Emails", allEmails });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};


export const exportEmail = async (req, res) => {
  try {
    let allEmails = await Emails.find();
    return res.status(200).json({ message: "Get All Emails", allEmails });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
}