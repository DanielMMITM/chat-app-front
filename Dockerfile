FROM node:23-alpine3.20

#RUN WITH A NON PRIVILEGED USER
RUN addgroup nodeGroup && adduser -S -G nodeGroup nodeUser
USER nodeUser

# Set the working directory inside the container
WORKDIR /chat-app-front
 
# Copy package.json and package-lock.json
COPY --chown=nodeUser:nodeGroup package.json .

# Install dependencies
RUN npm install 

# Copy the rest of your application files
COPY --chown=nodeUser:nodeGroup . .
 
# Define the command to run your app

CMD ["npm", "run", "dev"]