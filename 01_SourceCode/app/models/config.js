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
function Config(){
    this.db_config = {
        host: process.env.MYSQL_HOST || '127.0.0.1' || "localhost",
        user: "root",
        password: "fc@123",
        database: 'billingdb'
    };

    
    // this.user_host_url = process.env.USER_HOST_URL || 'https://cms.numocity.com:3001';
    // this.notif_host_url = process.env.NOTIF_HOST_URL || 'https://cms.numocity.com:3006';
}

module.exports = new Config();