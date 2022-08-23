var express = require('express');
var router = express.Router();
var prepayEstimation = require('../models/prepay_estimation');

router.post('/calculate', function(req, res, next) {
    prepayEstimation.calculate(req, res, next);
});

module.exports = router;