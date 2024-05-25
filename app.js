import express from "express";
import cors from "cors";
import public_route from "./src/routes/public.js";
import bodyparser from "body-parser";
export const app = express();

const corsOptions = {
  origin: "https://myelino.com/", // Replace with your frontend domain
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Enable preflight requests for all routes
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(
  bodyparser.json({
    limit: "50mb",
  })
);

app.use("/public", public_route);
