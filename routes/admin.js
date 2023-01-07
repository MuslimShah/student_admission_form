const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

//==> GET ADMIN HOME
router.get("/home", adminController.getAdminHome);
router.get("/all-students", adminController.getAllStudens);
router.get("/view-student/:id", adminController.getViewStudens);
router.get('/delete-student/:id', adminController.deleteStudent);

//===>GET EDIT STUDENT
router.get("/edit-student/:id", adminController.getEditStudent);
//===>POST EDIT STUDENT
router.post("/edit-student", adminController.postEditStudent);
module.exports = router;
