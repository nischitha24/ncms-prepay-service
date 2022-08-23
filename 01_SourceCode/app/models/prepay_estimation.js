/*  Copyright (c) 2019 Numocity Technologies Private Limited., - All Rights Reserved
 *  All source code contained herein remains the property of Numocity  
 *  and protected by trade secret or copyright law of India.
 *  Dissemination, De-compilation, Modification and Distribution is strictly prohibited unless
 *  there is a prior written permission or license agreement from Numocity.
 *
 *  Author : @nithin 
 *   
 * 
 */
function PrepayEstimation() {
    var helper = require('./helper');
    this.calculate = function (req, res, next) {
        try {
            var reqObj = req.body;
            var amount = reqObj.amount;
            if (reqObj.discountValue > 0) {
                amount = amount - reqObj.discountValue;
            }
            var taxAmount = (amount * reqObj.taxPercentage) / 100;
            taxAmount = parseFloat(taxAmount).toFixed(2);
            var totalAmount = parseFloat(amount) + parseFloat(taxAmount);
            totalAmount = parseFloat(totalAmount).toFixed(2);
            var resObj = {
                "totalAmount": totalAmount,
                "taxAmount":taxAmount,
                "amount":amount
            }
            res.send(helper.createResponse(helper.Success, 1, helper.ResultMsg, resObj));
        } catch (ex) {
            console.error("Internal error:" + ex);
            return next(ex);
        }
    };

}
module.exports = new PrepayEstimation();