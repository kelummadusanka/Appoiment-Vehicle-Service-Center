const AdminUser = require("../../models/Admin");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.AdminSignIn = (req, res) => {
  console.log("inside admin signIn");

  AdminUser.findOne({ username: req.body.username })
    .exec()
    .then((user) => {
      if (!user) {
        console.log("Invalid Admin Username");
        return res.status(401).json({
          message: "Invalid Admin Username",
        });
      } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            console.log("Authentication Failed");
            return res.status(401).json({
              message: "Authentication Failed",
              success: false,
            });
          } else if (result) {
            console.log("return a Admin");
            const id = result._id;
            const token = jwt.sign({ id }, "secretKey", { expiresIn: "1h" }); //add to .env file later
            return res.status(200).json({
              message: "Authentication Successful",
              user: user,
              success:true,
              token:token
            });
          } else {
            console.log("Incorrect Admin Password!");
            return res.status(401).json({
              message: "Incorrect Admin Password!",
              success: false,
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log("Admin_Login Error: " + err);
      res.status(500).json({
        message:"Admin_Login_Error: "+ err,
      });
    });
};

exports.AdminRegister = (req, res) => {
  console.log("Inside Admin Register");

  if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.username || !req.body.address1 || !req.body.city || !req.body.password) {
      return res.status(400).json({ message: "All fields are required" });
  }

  AdminUser.find({ username: req.body.username })
    .exec()
    .then((Admin) => {
      if (Admin.length >= 1) {
        return res.status(409).json({
          message: "Admin Already Exist",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const signedUpAdmin = new AdminUser({
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              address1: req.body.address1,
              city: req.body.city,
              username: req.body.username,
              email: req.body.email,
              password: hash,
              role:"admin"
            });
            signedUpAdmin
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "Admin Registered Successfully",
                  Admin: result,
                });
              })
              .catch((err) => {
                console.log("Admin Registration Error" + err);
                res.status(500).json({
                    message:"Admin_Registartion_Error: "+ err,
                });
              });
          }
        });
      }
    });
};

exports.upadateAdminProfile = async (req, res) => {
  console.log("insidse upadateAdminProfile");
  AdminUser.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
        res.json({
          message: "Admin update failed! ",
          success: false,
        });
      } else {
        console.log("Admin upadated user!");
        res.json({
          message: "successfully Admin updated",
          success: true,
          user: data,
        });
      }
    }
  )
    .clone()
    .catch((err) => {
      console.log("Admin Update Error: " + err);
      res.status(500).json({
        vehUpdate_Error: err,
        message: err,
        success: false,
        icon: "error",
        title: "Admin update failed!",
        user: data,
      });
    });
};

exports.DeleteAdmin = async (req, res) => {
  console.log("insidse DeleteAdmin");
  console.log(req.params.id);

  await AdminUser.findByIdAndDelete(req.params.id, (error, result) => {
    if (error)
      res.status(400).json({
        message: err,
        success: false,
      });
    else console.log("Admin has been deleted!");

    res.status(200).json({
      message: "Admin has been deleted!",
      success: true,
    });
  })
    .clone()
    .catch((err) => {
      console.log("Admin Delete Error: " + err);
      res.status(500).json({
        message:"AdminDelete_Error: "+err,
        success: false,
      });
    });
};
