const express = require('express')
const router = express.Router()
const CutomerCotrolling = require('../../controllers/AdminControlers/CutomerCotrolling');
const checkAuthorization  = require('../../middlewares/checkAuthorization')


router.get('/getUser',CutomerCotrolling.getUser);

router.delete('/DeleteUser',CutomerCotrolling.DeleteUser);

module.exports = router