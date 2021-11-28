const Service = require("../../models/UpcommingServices");

exports.getAdminServices = async (req, res) => {
  console.log("inside admin getServices");
  await Service.find({})
    .populate({ path: "vehId" }) //check here if any wrong??????
    .then((result) =>
      res.json({
        Service: result,
        success: true,
      })
    )
    .catch((err) => {
      console.log("getServices Error: " + err);
      res.status(500).json({
        message: "getServices_Error: " + err,
      });
    });
};

exports.AdminUpdateService = (req, res) => {
  console.log("insidse AdminUpdateService");
  console.log(req.body);
  Service.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (error, data) => {
      if (error) {
        res.status(400).json({
          message: err,
        });
        console.log(error);
      } else {
        console.log("Done!");
        res.status(200).json({
          Service: data,
          success: true,
          message: "Done!",
        });
      }
    }
  )
    .clone()
    .catch((err) => {
      console.log("Admin_Update_Service: " + err);
      res.status(500).json({
        message: "Admin Update Service : " + err,
      });
    });
};

exports.DeleteService = async (req, res) => {
  console.log("insidse DeleteService");
  console.log(req.params.id);

  await Service.findByIdAndDelete(req.params.id, (error, doc) => {
    if (error)
      res.status(400).json({
        message: err,
        success: false,
      });
    else console.log("Service has been deleted!");

    res.status(200).json({
      message: "Service has been deleted!",
      success: true,
      doc,
    });
  })
    .clone()
    .catch((err) => {
      console.log("Service Delete Error: " + err);
      res.status(500).json({
        message: "Service_Delete_Error: " + err,
        success: false,
      });
    });
};

//chcek what hepen there????
exports.DeleteAllService = async (req, res) => {
  console.log("insidse DeleteAllService");
  console.log(req.body);

  await Service.deleteMany(req.body, (error, doc) => {
    if (error)
      res.status(400).json({
        message: err,
        success: false,
      });
    else console.log("All Services have been deleted!");

    res.status(200).json({
      message: "All Services have been deleted!",
      success: true,
      doc,
    });
  })
    .clone()
    .catch((err) => {
      console.log("all Service Delete Error: " + err);
      res.status(500).json({
        message: "All Service Delete Error: " + err,
        success: false,
      });
    });
};
