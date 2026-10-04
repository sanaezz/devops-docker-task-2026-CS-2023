# DevOps Docker Task

## Student Information

Name: YOUR NAME

Student ID: YOUR STUDENT ID

Course: DevOps

## Application Description

This is a simple web application developed for the DevOps Docker task.
The application displays student information and confirms that it is
running inside a Docker container.

## Technologies Used

- Git
- GitHub
- Docker
- Docker Hub
- Node.js
- Express.js

## Dockerfile Explanation

### FROM
Uses Node.js 20 Alpine as the base image.

### WORKDIR
Sets /app as the working directory inside the container.

### COPY
Copies the package files and application files into the container.

### RUN
Installs the required Node.js dependencies.

### EXPOSE
Exposes port 3000 for the application.

### CMD
Starts the application using npm start.

## Docker Commands

### Build

docker build -t YOUR-USERNAME/devops-task:v1 .

### Run

docker run -d -p 3000:3000 --name devops-task YOUR-USERNAME/devops-task:v1

### Push

docker push YOUR-USERNAME/devops-task:v1

### Pull

docker pull YOUR-USERNAME/devops-task:v1

## Docker Hub

Docker Hub Repository:

YOUR DOCKER HUB REPOSITORY

## How to Run

docker pull YOUR-USERNAME/devops-task:v1

docker run -d -p 3000:3000 --name devops-task YOUR-USERNAME/devops-task:v1

Open:

http://localhost:3000

## Screenshots

Screenshots demonstrating:

1. GitHub repository
2. Dockerfile
3. Docker image
4. Running container
5. Application in browser
6. Docker Hub repository
7. Docker pull