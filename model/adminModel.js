const db = require("../util/database");
exports.getTotalStudents = () => {
  // const all =
  // const males = db.execute("select count(id) as males from school.student where gender='male';");

  // const totalData = {
  //     total: all,
  //     males:males
  // }
  return db.execute("select count(id) as data from school.student;");
};
exports.getAllMale = () => {
  return db.execute(" select * from student where gender='male';");
};
exports.getAllFemale = () => {
  return db.execute("select * from student where gender='female';");
};
