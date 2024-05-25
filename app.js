import express from "express";
import cors from "cors";
import public_route from "./src/routes/public.js";

export const app = express();

const corsOptions = {
  origin: "https://myelino.com", // Replace with your frontend domain
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: ["Content-Type", "Authorization"], // Uncomment and use if needed
  credentials: true, // If you need to include credentials
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/public", public_route);
