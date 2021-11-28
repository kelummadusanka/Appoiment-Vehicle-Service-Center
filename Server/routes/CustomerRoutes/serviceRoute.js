const express = require("express");
const router = express.Router();
const serviceControl = require('../../controllers/CustomerControlers/serviceControl');
const checkAuthorization  = require('../../middlewares/checkAuthorization')


router.post("/addService",[checkAuthorization.isUserAuth],serviceControl.addService );

router.post("/getService",serviceControl.getService);

router.patch("/updateServiceFromVehicle/:id",[checkAuthorization.isUserAuth],serviceControl.UpdateUpCommingServiceWhenUpdateVehicle);

router.patch("/updateService/:id",[checkAuthorization.isUserAuth],serviceControl.UpdateUpCommingService);

router.patch("/addService/:id",[checkAuthorization.isUserAuth],serviceControl.DeleteUpCommingService);

module.exports = router;
