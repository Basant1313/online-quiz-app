import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./quiz.db", // SQLite file
  logging: false
});

export default sequelize;
