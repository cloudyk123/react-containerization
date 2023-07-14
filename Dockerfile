# Use an official Node.js runtime as the base image
FROM node:18-alpine
LABEL authors="yusungkung"

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory

# Install project dependencies
COPY yarn.lock .

# Copy the entire project to the working directory
COPY . .

RUN yarn install

# Build the React app
RUN yarn build


# Expose the desired port (e.g., 3000) that the container will listen on
EXPOSE 3000

# Define the command to run the application when the container starts
CMD ["npm", "start"]
