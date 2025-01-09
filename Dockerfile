FROM node:23-alpine3.20

#RUN WITH A NON PRIVILEGED USER
RUN addgroup nodeGroup && adduser -S -G nodeGroup nodeUser
USER nodeUser

# Set the working directory inside the container
WORKDIR /chat-app-front
 
#Copy package.json
COPY package.json .

# Install dependencies
RUN npm cache clean --force
RUN npm i

# Copy the rest of your application files
COPY . .

# Assign workdir to the new user
RUN chown nodeUser:nodeGroup .
RUN chown nodeUser:nodeGroup /chat-app-front