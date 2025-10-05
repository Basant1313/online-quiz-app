import express from "express";
import cors from "cors";
import quizRoutes from "./routes/quiz.route.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/quiz", quizRoutes);

app.get("/", (req, res) => {
  res.send("Quiz API is running...");
});

export default app;
