const mongoose = require("mongoose");
const Vehicle = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  customeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },

  vehNumber: {
    type: String,
    required: true,
  },

  vehType: {
    type: String,
    required: true,
  },
  vehBrand: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    required: true,
  },

  manufacturedYear: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  AddedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("myVehicles", Vehicle);
