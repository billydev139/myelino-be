import Emails from "../../models/email.js";

export const subscribeEmail = async (req, res) => {
  let { email } = req.body;

  const regexEmail = /^\S+@\S+\.\S+$/;
      
  email = email.toLowerCase();

  if (!regexEmail.test(email)) {
    return res.status(203).json({ message: "Enter Valid E-mail" });
  }

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
  return res.status(201).json({ message: "You Have Been Myelinated" });
};

export const getSubscribeEmail = async (req, res) => {
  try {
    let allEmails = await Emails.find();
    return res.status(200).json({ message: "Get All Emails", allEmails });
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};
