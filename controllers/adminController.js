const Student = require("../model/studentData");

exports.getAdminHome = async (req, res, next) => {
  const data = await Student.findAll();
  // console.log(data);
  const males = await Student.findAll({
    where: {
      gender: "male",
    },
  });
  const females = await Student.findAll({
    where: {
      gender: "female",
    },
  });
  const totalMales = males.length;
  const totalFemales = females.length;
  const totalStudents = data.length;
  console.log(totalStudents);

  const totalData = {
    totalStudents: totalStudents,
    males: totalMales,
    females: totalFemales,
  };
  res.render("admin/admin-Home", {
    pageTitle: "admin-home",
    path: "/admin/admin-home",
    data: totalData,
  });
};

//get all students
exports.getAllStudens = async (req, res, next) => {
  const data = await Student.findAll();
  res.render("admin/all-students", {
    pageTitle: "all-students",
    path: "/admin/all-students",
    data: data,
  });
};

//view student
//=========== view student ========================
exports.getViewStudens = async (req, res, next) => {
  const id = req.params.id;
  const data = await Student.findByPk(id);

  res.render("admin/view-student", {
    pageTitle: "Student",
    path: "admin/view-student",
    record: data,
  });
};
//==================== view student end ==============

//=== edit student =====
//==>GET EDIT STUDENT
module.exports.getEditStudent = async (req, res) => {
  const id = req.params.id;
  const data = await Student.findByPk(id);
  res.render("user/admit-student", {
    pageTitle: "admit-student",
    path: "/admit-student",
    data: data,
    editing: true,
  });
};

// ==>POST EDIT STUDENT
module.exports.postEditStudent = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const fatherName = req.body.fatherName;
  const gender = req.body.gender;
  const dateOfBirth = req.body.dateOfBirth;
  const email = req.body.email;
  const address = req.body.address;
  const student = await Student.findByPk(id);
  student.name = name;
  student.fatherName = fatherName;
  student.email = email;
  student.address = address;
  student.gender = gender;
  student.dateOfBirth = dateOfBirth;
  student.save();
  console.log("======= + student updated + ==========");
  res.redirect("/admin/all-students");
};

//========= delete student =============
exports.deleteStudent = async (req, res, next) => {
  const id = req.params.id;

  await Student.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/admin/all-students");

  //
};
