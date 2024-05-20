import express from "express";
const router = express.Router();
import {
  subscribeEmail,
  getSubscribeEmail,
  exportEmail,
} from "../controllers/public/public.js";

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
 * /public/getSubscribeEmail:
 *   get:
 *     summary: Retrieve a list of all subscribed emails
 *     tags: [Emails]
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
router.route("/getSubscribeEmail").get(getSubscribeEmail);

export default router;
