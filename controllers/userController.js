const Student = require("../model/studentData");
//==>get home
module.exports.getHome = (req, res, next) => {
  res.render("user/home", { pageTitle: "Home", path: "/" });
};
//==>user/admit-student ==>GET
module.exports.getAddStudent = async (req, res) => {
  res.render("user/admit-student", {
    pageTitle: "admit-student",
    path: "/admit-student",
    editing: false,
  });
};
//==>user/admit-student ==>POST
///////////////////// ADDING STUDENT RECORD ////////////////////////////////////////

module.exports.postAddStudent = async (req, res) => {
  const name = req.body.name;
  const fatherName = req.body.fatherName;
  const gender = req.body.gender;
  const dateOfBirth = req.body.dateOfBirth;
  const email = req.body.email;
  const address = req.body.address;
  try {
    const result = await Student.create({
      name: name,
      fathername: fatherName,
      email: email,
      address: address,
      gender: gender,
      dateOfBirth: dateOfBirth,
    });
    console.log("======= + student admitted + =========");

    res.redirect("/");
  } catch (err) {
    console.log("error :" + err);
  }
};
////////////////////////////////////////// END ///////////////////////////////
