const express = require('express');
const userConroller = require('../controllers/userController')
const router = express.Router();

//==>USER ROUTES
//==>GET ADMINT STUDENT
router.get("/admit-student", userConroller.getAddStudent);
// ==> POST ADMIT STUDENT
router.post('/admit-student', userConroller.postAddStudent);




//==>GET home
router.get('/', userConroller.getHome);


module.exports = router;
