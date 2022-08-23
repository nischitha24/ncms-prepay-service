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
function Helper() {
    this.noResultMsg = "No result found";
    this.ResultMsg = "Result Found";
    this.Success = "Success";
    this.Error = "Error";
    this.authError = "Failed to authenticate.";
    this.createResponse = function (status, code, message, document) {
        return { "Status": status, "Code": code, "Message": message, "Document": document };
    };

    this.hasOwnProperty = function (obj, propertyName) {
        if (propertyName in obj) {
            return true;
        } else {
            return false;
        }
    };
}
    

module.exports = new Helper();