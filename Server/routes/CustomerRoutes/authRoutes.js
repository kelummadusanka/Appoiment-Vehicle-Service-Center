const express = require('express')
const router = express.Router()
const authController = require('../../controllers/CustomerControlers/authControl');
const checkAuthorization  = require('../../middlewares/checkAuthorization')


router.post('/signup',authController.signUp);


router.post('/signIn',authController.signIn);

router.patch('/upadateUserProfile',[checkAuthorization.isUserAuth],authController.upadateUserProfile);


module.exports = router