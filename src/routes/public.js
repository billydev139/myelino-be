import express from "express";
const router = express.Router();
import Admin from "../models/admin.js"
import {
  subscribeEmail,
  getSubscribeEmail,
} from "../controllers/public/public.js";

export const isAuth = async (req, res, next) => {
  try {
    
   let  password = req.body.password
      console.log("🚀 ~ isAuth ~ password:", password)
      let  admin = await Admin.findOne({ password: password });
      console.log("🚀 ~ isAuth ~ admin:", admin)
    if (!admin) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }
    next();
  } catch (error) {
    return sendError(res, error);
  }
};


/**
 * @swagger
 * components:
 *   schemas:
 *     Email:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           description: The email address of the user
 *           example: user@example.com
 *
 * /public/subscribeEmail:
 *   post:
 *     summary: Create a new email
 *     tags: [Emails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: The email was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Email'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

router.route("/subscribeEmail").post(subscribeEmail);

/**
 * @swagger
 * components:
 *   schemas:
 *         password:
 *           type: string
 *           format: password
 *           description: The password for authentication
 *
 * /public/getSubscribeEmail:
 *   post:
 *     summary: Retrieve a list of all subscribed emails
 *     tags: 
 *       - Emails
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password for authentication
 *     responses:
 *       200:
 *         description: A list of all subscribed emails
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EmailResponse'
 *       500:
 *         description: Internal server error
 */

router.route("/getSubscribeEmail").post(isAuth,getSubscribeEmail);

export default router;
