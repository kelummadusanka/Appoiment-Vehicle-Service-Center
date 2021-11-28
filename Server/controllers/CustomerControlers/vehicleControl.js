const Vehicle = require('../../models/Vehicle');

exports.addMyVehicles = (req, res) => {
  console.log("Inside add vehicle");

  Vehicle.find({ vehNumber: req.body.vehNumber })
    .exec()
    .then((vehicle) => {
      if (vehicle.length >= 1) {
        //return res.status(409).json({
        return res.status(403).json({
          message: "Vehicle Number Already Exist",
        });
      } else {
        const newVehicle = new Vehicle({
          email: req.body.email,
          vehNumber: req.body.vehNumber,
          vehType: req.body.vehType,
          vehBrand: req.body.vehBrand,
          model: req.body.model,
          image: req.body.image,
          manufacturedYear: req.body.manufacturedYear,
          color: req.body.color,
        });
        newVehicle
          .save()
          .then((result) => {
            console.log("Added new vehicle!");
            res.status(201).json({
              message: "Added Successfully",
              vehicle: result,
              success:true
            });
          })
          .catch((err) => {
            console.log("Vehicle Registration Error" + err);
            res.status(500).json({
              message:"vehRegistartion_Error: "+err,
            });
          });
      }
    });
};

exports.getMyVehicles = (req, res) => {
  console.log("Inside getMyVehicles");
  Vehicle.find({ email: req.body.email })
    .select()
    .exec()
    .then((response) => {
      if (response.length == 0) {
        console.log("No Vehicle Available");
        res.status(200).json({
          message: "No Vehicle Available",
          vehicles: response,
          success:true
        });
      } else {
        console.log("return the relevant vehicles");
        res.status(200).json({
          message: "Vehicle Available",
          vehicles: response,
          success:true
        });
        //res.send(response);
      }
    })
    .catch((err) => {
      console.log("get my vehicle err : " + err);
      res.status(500).json({
        vehGet_Error: err,
      });
    });
};

exports.UpdateVehicle = async (req, res) => {
  console.log("insidse Update Vehicle");
  Vehicle.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
        res.status(400).json({
          message: "update failed!",
          success: false,
        });
      } else {
        console.log("Updated Vehicle!");
        res.status(200).json({
          message: "successfully updated",
          success: true,

        });
      }
    }
  )
    .clone()
    .catch((err) => {
      console.log("Vehicle Update Error: " + err);
      res.status(500).json({
        vehUpdate_Error: err,
        message: err,
        success: false,

      });
    });
};

exports.DeleteVehicle = async (req, res) => {
  console.log("insidse Delete Vehicle");
  console.log(req.params.id);

  await Vehicle.findByIdAndDelete(req.params.id, (error, result) => {
    if (error)
      res.status(400).json({
        message: err,
        success: false,

      });
    else console.log("Your vehicle has been deleted!");

    res.status(200).json({
      message: "Your vehicle has been deleted!",
      success: true,
    });
  })
    .clone()
    .catch((err) => {
      console.log("Vehicle Delete Error: " + err);
      res.status(500).json({
        message:"vehDelete_Error: "+ err,
        success: false,
      });
    });
};
