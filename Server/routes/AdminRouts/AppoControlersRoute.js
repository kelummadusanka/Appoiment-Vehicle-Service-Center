const express = require('express')
const router = express.Router()
const AppoControlers = require('../../controllers/AdminControlers/AppoControlers');
const checkAuthorization  = require('../../middlewares/checkAuthorization')


router.get('/getAdminServices',AppoControlers.getAdminServices);


router.patch('/AdminUpdateService/:id',AppoControlers.AdminUpdateService);


router.delete('/DeleteAllService',AppoControlers.DeleteAllService);
//,[checkAuthorization.isUserAuth]

module.exports = router