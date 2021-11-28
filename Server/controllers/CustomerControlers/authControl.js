const User = require("../../models/SignUpModels");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signIn = (req, res) => {
  console.log("inside signIn");

  User.findOne({ username: req.body.username })
    .exec()
    .then((user) => {
      if (!user) {
        console.log("Invalid Username");
        return res.status(401).json({
          message: "Invalid Username",
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
            console.log("return a user");
            const id = result._id;
            const token = jwt.sign({ id }, "secretKey", { expiresIn: "1h" }); //add to .env file later
            return res.status(200).json({
              message: "Authentication Successful",
              user: user,
              success:true,
              token:token
            });
          } else {
            console.log("Incorrect Password!");
            return res.status(401).json({
              message: "Incorrect Password!",
              success: false,
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log("Login Error: " + err);
      res.status(500).json({
        message:"Login_Error: "+ err,
      });
    });
};

exports.signUp = (req, res) => {
  console.log("Inside Register");

  if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.username || !req.body.address1 || !req.body.city || !req.body.password) {
      return res.status(400).json({ message: "All fields are required" });
  }

  User.find({ username: req.body.username })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "User Already Exist",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const signedUpUser = new User({
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              address1: req.body.address1,
              city: req.body.city,
              username: req.body.username,
              email: req.body.email,
              password: hash,
            });
            signedUpUser
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "Registered Successfully",
                  user: result,
                });
              })
              .catch((err) => {
                console.log("Registration Error" + err);
                res.status(500).json({
                    message:"Registartion_Error: "+ err,
                });
              });
          }
        });
      }
    });
};

exports.upadateUserProfile = async (req, res) => {
  console.log("insidse upadateUserProfile");
  User.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
        res.json({
          message: "update failed! ",
          success: false,
        });
      } else {
        console.log("upadated user!");
        res.json({
          message: "successfully user updated",
          success: true,
          user: data,
        });
      }
    }
  )
    .clone()
    .catch((err) => {
      console.log("User Update Error: " + err);
      res.status(500).json({
        message: "VehUpdate_Error: "+ err,
        success: false,
      });
    });
};
