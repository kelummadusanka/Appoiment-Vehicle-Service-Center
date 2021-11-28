const Service = require('../../models/UpcommingServices');

exports.addService = async (req, res) => {
  console.log(req.body.vehId)

  if (!req.body.vehNumber || !req.body.vehType || !req.body.ServiceType || !req.body.appoTime || !req.body.appoDate) {
    return res.status(400).json({ message: "All fields are required" });
}
  await Service.find({
    vehNumber: req.body.vehNumber,
    Status: { $in: ["pending", "confirm"] },
    result: false,
  })
    .exec()
    .then((service) => {
      if (service.length >= 1) {
        console.log("have a book already");
        return res.status(403).json({
          success: false,
          message: "This vehicle already has appoinment!",
        });
      } else {
        console.log(" inside addUpcommingService");
        Service.find({
          appoDate: req.body.appoDate,
          appoTime: req.body.appoTime,
        })
          .exec()
          .then((service) => {
            if (service.length >= 3) {
              console.log("Sorry Time slot is full, please try another time");
              return res.status(429).json({
                success: false,
                message: "Sorry Time slot is full, please try another time",
              });
            } else {
              const upcommingService = new Service(req.body);
              upcommingService
                .save()
                .then((result) => {
                  console.log("Booked Successfully");
                  res.status(201).json({
                    success: true,
                    message: "Booked Successfully"
                  });
                })
                .catch((err) => {
                  console.log("upcomming Service Error" + err);
                  res.status(500).json({
                    message:"UpcommingServices_Error: "+ err,
                  });
                });
            }
          });
      }
    });
};

exports.getService = (req, res) => {
  Service.find({ email: req.body.email }) //Status:{ "$in": ["pending", "confirm"] }
    .exec()
    .then((result) => res.json({Service:result,success:true}))
    .catch((err) => {
      console.log("Login Error: " + err);
      res.status(500).json({
        message:"Login_Error: "+ err,
      });
    });
};

exports.UpdateUpCommingServiceWhenUpdateVehicle = (req, res) => {
  console.log("insidse Update Upcomming Due to Vehicle Update");
  Service.findOneAndUpdate(
    { vehNumber: req.body.vehNumber, Status: { $in: ["pending", "confirm"] } },
    { vehType: req.body.vehType, vehNumber: req.body.vehNumber },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
        res.status(400).json({
          success: false,
          message: error,
        });
      } else {
        console.log(data);
        res.status(200).json({
          success: true,
          message: "Updated Upcomming service also Due to update Vehicel",
        });
      }
    }
  ).clone().catch((err) => {
    console.log("Update_Servie_Error: " + err);
    res.status(500).json({
      message:"Update_Servie_Error "+ err,
    });
  });
};

exports.UpdateUpCommingService = (req, res) => {
  console.log("insidse Update Upcomming Service");
  Service.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
        res.status(400).json({
          success: false,
          message: error,
        });
      } else {
        console.log(data);
        res.status(200).json({
          success: true,
          message: "Updated Upcomming service!",
        });
      }
    }
  ).clone().catch((err) => {
    console.log("Update_Servie_Error: " + err);
    res.status(500).json({
      message:"Update_Servie_Error "+ err,
    });
  });
};

exports.DeleteUpCommingService = (req, res) => {
  console.log("insidse delete");
  Service.findByIdAndUpdate(
    req.body._id,
    { result: false, Status: "closed", description: "user cancellation" },
    { new: true },
    (error, data) => {
      if (error) {
        res.status(400).json({
          message: err,
        });
        console.log(error);
      } else {
        console.log("deleted service");
        res.status(200).json({
          success: true,
          message: "Deleted Upcomming service!",
        });
      }
    }
  ).clone().catch((err) => {
    console.log("Delete_Service_Error: " + err);
    res.status(500).json({
      message:"Delete_Servie_Error "+ err,
    });
  });
};
