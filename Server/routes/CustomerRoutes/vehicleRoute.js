const express = require("express");
const router = express.Router();
const VehicleControl = require('../../controllers/CustomerControlers/vehicleControl');
const checkAuthorization  = require('../../middlewares/checkAuthorization')



router.post("/addMyVehicle",[checkAuthorization.isUserAuth],VehicleControl.addMyVehicles);

router.post("/getMyVehicles",VehicleControl.getMyVehicles);

router.patch("/addMyVehicle/:id",[checkAuthorization.isUserAuth],VehicleControl.UpdateVehicle);

router.delete("/addMyVehicle/:id",[checkAuthorization.isUserAuth],VehicleControl.DeleteVehicle);

module.exports = router;
