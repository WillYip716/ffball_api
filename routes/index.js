var express = require('express');
var router = express.Router();

const api_controller = require('../controllers/apicontroller');



router.post('/add_league', api_controller.store_league);


module.exports = router;
