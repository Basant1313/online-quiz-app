// import Question from '../models/question.model.js'

// // GET /api/quiz/questions
// export const getQuestions = async (req, res) => {
//   try {
//     const questions = await Question.findAll({
//       attributes: ["id", "text", "options"] // exclude correctOption
//     });
//     res.json(questions);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // POST /api/quiz/submit
// export const submitAnswers = async (req, res) => {
//   try {
//     const { answers } = req.body;
//     if (!answers || !Array.isArray(answers)) {
//       return res.status(400).json({ message: "Invalid request format" });
//     }

//     let score = 0;
//     const details = [];

//     for (const ans of answers) {
//       const question = await Question.findByPk(ans.questionId);
//       if (!question) continue;

//       const isCorrect = question.correctOption === ans.selectedOption;
//       if (isCorrect) score++;

//       details.push({
//         id: question.id,
//         question: question.text,
//         userAnswer: ans.selectedOption || null,
//         correctAnswer: question.correctOption,
//         isCorrect
//       });
//     }

//     res.json({ score, total: details.length, details });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };


import Question from '../models/question.model.js'

// GET /api/quiz/questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll({
      attributes: ["id", "text", "options"] // exclude correctOption
    });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST /api/quiz/submit
export const submitAnswers = async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Invalid request format" });
    }

    let score = 0;
    const details = [];

    for (const ans of answers) {
      const question = await Question.findByPk(ans.questionId);
      if (!question) continue;

      const isCorrect = question.correctOption === ans.selectedOption;
      if (isCorrect) score++;

      details.push({
        id: question.id,
        question: question.text,
        userAnswer: ans.selectedOption != null ? ans.selectedOption : null,
        correctAnswer: question.correctOption,
        isCorrect
      });
    }

    // ✅ Send response in the exact format frontend expects
    res.json({ score, total: details.length, details });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
