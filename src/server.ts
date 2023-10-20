import express from "express";
import { routes } from "./routes";
import cors from "cors";

const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, () => console.log("server running on port", PORT));
