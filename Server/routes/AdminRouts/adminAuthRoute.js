const express = require('express')
const router = express.Router()
const adminAuthController = require('../../controllers/AdminControlers/Admin_Auth');
const checkAuthorization  = require('../../middlewares/checkAuthorization')


router.post('/AdminRegister',adminAuthController.AdminRegister);


router.post('/adminSignIn',adminAuthController.AdminSignIn);

router.patch('/upadateAdminProfile',[checkAuthorization.isUserAuth],adminAuthController.upadateAdminProfile);


module.exports = router