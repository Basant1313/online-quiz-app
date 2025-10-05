import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Question = sequelize.define("Question", {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  options: {
    type: DataTypes.JSON, // store array of options
    allowNull: false
  },
  correctOption: {
    type: DataTypes.INTEGER, // index of correct answer
    allowNull: false
  }
});

export default Question;
