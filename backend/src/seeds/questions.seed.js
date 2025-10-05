import sequelize from "../config/db.js";
import Question from "../models/question.model.js";

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); // reset DB

    await Question.bulkCreate([
      {
        text: "Capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctOption: 2, // Paris
      },
      {
        text: "Which language runs in a web browser?",
        options: ["C++", "Python", "Java", "JavaScript"],
        correctOption: 3, // JavaScript
      },
      {
        text: "Who developed the theory of relativity?",
        options: ["Newton", "Einstein", "Tesla", "Galileo"],
        correctOption: 1, // Einstein
      },
      {
        text: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctOption: 1, // Mars
      },
      {
        text: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "HighText Transfer Protocol",
          "Hyper Transfer Text Program",
          "Home Tool Transfer Protocol",
        ],
        correctOption: 0, // HyperText Transfer Protocol
      },
    ]);

    console.log("✅ Seed data inserted with 5 questions, 4 options each");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    process.exit();
  }
};

seed();
