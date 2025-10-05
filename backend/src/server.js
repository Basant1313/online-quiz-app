import dotenv from "dotenv";
import app from "./app.js";
import sequelize from "./config/db.js";


dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.sync(); // creates tables if not exist
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
};

startServer();
