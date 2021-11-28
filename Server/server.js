const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const custAuthUrls = require('./routes/CustomerRoutes/authRoutes');
const custVehicleUrls = require('./routes/CustomerRoutes/vehicleRoute');
const custServiceUrls = require('./routes/CustomerRoutes/serviceRoute');

const adminAuthUrls = require('./routes/AdminRouts/adminAuthRoute');
const CutomerCotrollingUrls = require('./routes/AdminRouts/CutomerCotrollingRoute');
const adminAppoControlersUrls = require('./routes/AdminRouts/AppoControlersRoute');
const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Access successfully!"));

//app.adminuse(express.json())
app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));
app.use(cors());

//all customer urls here
app.use('/app/customer/auth', custAuthUrls);
app.use('/app/customer/vehicle', custVehicleUrls);
app.use('/app/customer/service', custServiceUrls);

//all admin urls here
app.use('/app/admin/auth', adminAuthUrls);
app.use('/app/admin/CutomerCotrolling', CutomerCotrollingUrls);
app.use('/app/admin/AppoControlers', adminAppoControlersUrls);
// app.use('/app/admin/service', serviceUrls);

app.listen(4000, () => console.log("server is up and running"));