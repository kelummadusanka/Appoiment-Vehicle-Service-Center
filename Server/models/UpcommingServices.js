const mongoose = require('mongoose')
const Service = new mongoose.Schema({
    email: {
        type: String,
        ref: "customer",
        required: true
    },

    vehId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "myVehicles",
      },

    vehNumber: {
        type: String,
        required: true
    },


    vehType: {
        type: String,
        required: true
    },

    ServiceType: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        default:"pending"
    },

    description: {
        type: String,
        default:""
    },
    appoDate: {
        type: Date,
        required: true
    },

    appoTime: {
        type: String,
        required: true
    },

    cost: {
        type: Number,
        default:0
    },

    result: {
        type: Boolean,
        default:false
    },

    AddedDate: {
        type: Date,
        default: Date.now
    },

    appoImage: {
        type: String,
        required:true
    }

});

module.exports = mongoose.model('Service', Service)