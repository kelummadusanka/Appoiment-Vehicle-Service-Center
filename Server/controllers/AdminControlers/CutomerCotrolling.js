const User = require("../../models/SignUpModels");

exports.DeleteUser = async (req, res) => {
  console.log("insidse DeleteUser");
  console.log(req.params.id);

  await User.findByIdAndDelete(req.params.id, (error, doc) => {
    if (error)
      res.status(400).json({
        message: err,
        success: false,
      });
    else console.log("User has been deleted!");

    res.status(200).json({
      message: "User has been deleted!",
      success: true,
      doc
    });
  })
    .clone()
    .catch((err) => {
      console.log("User Delete Error: " + err);
      res.status(500).json({
        message: "User_Delete_Error: " + err,
        success: false,
      });
    });
};

exports.getUser = async (req, res) => {
    console.log("inside getUser");
  await User.find({})
    .exec()
    .then((result) =>
      res.json({
        users: result,
        success: true,
      })
    )
    .catch((err) => {
      console.log("getUser Error: " + err);
      res.status(500).json({
        message: "getUser_Error: " + err,
      });
    });
};
