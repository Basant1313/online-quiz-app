# 🧠 Online Quiz Application

A full-stack web application where users can take quizzes, track their progress, and view their results instantly.

---

## 🚀 Tech Stack

- **Frontend:** React, TailwindCSS, Framer Motion  
- **Backend:** Node.js, Express, SQLite  


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Basant1313/online-quiz-app.git
cd online-quiz-app

```

2. Install dependencies:

Install dependencies for both the backend and frontend:

 ```bash
    cd backend
    npm install

    cd ../frontend
    npm install

 ```
3. Run the backend:
```bash
    npm run dev
```
4. Run the frontend:
```bash
    npm run dev
```

Your app will typically be available at:
👉 Frontend: http://localhost:5173
👉 Backend: http://localhost:5000


## 🧩 Features

🧠 Take quizzes with multiple-choice questions

⏱️ Timer-based automatic navigation

📊 View score and correct/incorrect answers

💫 Animated transitions and responsive UI

🧹 Clean RESTful API structure

## 📝 Design Choices

Used simple useState and useEffect for state management

Followed RESTful API principles for clarity

Modular and reusable component structure for scalability

## 📂 Project Structure

```text
online-quiz-app/
│
├── backend/                     # Express + Node.js (API)
│   ├── src/
│   │   ├── config/              # Configuration files
│   │   │   └── db.js            # Database connection setup
│   │   ├── controllers/         # Request handlers
│   │   │   └── quiz.controller.js  # Handles quiz API logic
│   │   ├── models/              # Database models
│   │   │   └── question.model.js   # Question schema/model
│   │   ├── routes/              # API routes
│   │   │   └── quiz.route.js       # Defines quiz-related routes
│   │   ├── seeds/               # Seed data for initial DB setup
│   │   │   └── questions.seed.js   # Example quiz questions
│   │   ├── app.js               # Express app configuration
│   │   └── server.js            # Entry point to start backend server
│   │
│   ├── package.json             # Backend dependencies and scripts
│   ├── package-lock.json        # npm lock file
│   └── .gitignore               # Files/folders to ignore in Git
│
├── frontend/                    # React + Tailwind + Framer Motion
│   ├── public/                  # Static files served by Vite
│   │   └── vite.svg             # Example Vite asset/logo
│   │
│   ├── src/                     # Main source code for frontend
│   │   ├── assets/              # Images, icons, logos, static media
│   │   │   └── react.svg        # Example React logo
│   │   │
│   │   ├── components/          # Reusable UI components
│   │   │   ├── OptionButton.jsx # Button for quiz options
│   │   │   ├── ProgressBar.jsx  # Progress bar for quiz
│   │   │   ├── QuestionCard.jsx # Displays individual quiz questions
│   │   │   ├── ResultView.jsx   # Displays quiz results
│   │   │   ├── TimerCircle.jsx  # Timer circle for countdown
│   │   │   └── index.js         # Exports all components
│   │   │
│   │   ├── pages/               # Page-level components for routing
│   │   │   ├── Home.jsx         # Home page
│   │   │   └── Quiz.jsx         # Quiz page
│   │   │
│   │   ├── services/            # API service functions
│   │   │   └── api.js           # Handles backend requests
│   │   │
│   │   ├── App.css              # Global styles
│   │   ├── App.jsx              # Main component and router
│   │   ├── index.css            # Base styles
│   │   └── main.jsx             # Entry point for React app
│   │
│   ├── .gitignore               # Files/folders to ignore in Git
│   ├── README.md                # Optional frontend-specific README
│   ├── eslint.config.js         # ESLint configuration
│   ├── package-lock.json        # Lock file for npm dependencies
│   ├── package.json             # Frontend dependencies and scripts
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   └── vite.config.js           # Vite config for dev/build
│
├── README.md                    # Project README with setup & usage
```
## 💡 Future Enhancements

🧩 Add authentication (JWT-based login/signup)

📈 Create a dashboard with quiz analytics

🌍 Deploy on AWS / Render / Vercel

