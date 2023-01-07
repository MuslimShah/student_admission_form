const { Sequelize ,DataTypes} = require("sequelize");
const sequelize = require('../util/database');



//================== DEFINING STUDENT MODEL  ================================
const Student = sequelize.define("student", {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fathername: {
    type: DataTypes.STRING,
    allownull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Student;
  
  // [student.name,student.fatherName,student.email,student.address,student.gender,student.dateOfBirth] 
  
