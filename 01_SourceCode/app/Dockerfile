 #  Copyright (c) 2019 Numocity Technologies Private Limited., - All Rights Reserved
 #  All source code contained herein remains the property of Numocity  
 #  and protected by trade secret or copyright law of India.
 #  Dissemination, De-compilation, Modification and Distribution is strictly prohibited unless
 #  there is a prior written permission or license agreement from Numocity.
 #
 #  Author : @nithin 
 #   
 # 
 #  
 
FROM node:8-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8000
EXPOSE 8001

CMD [ "npm", "start" ]
