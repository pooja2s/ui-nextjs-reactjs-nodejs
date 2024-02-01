### UI : 
# Build a UI for REST API with React.js and Next.js

### Overview
I am trying to build a user interface using React.js and Next.js for an existing RESTful API that I have built in Node.js. 

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by deleting the src and app.tsx. after that you have to create a folder name pages and create two file in it which is `pages/_app.tsx` and `pages/index.tsx`. The page auto-updates as you edit the file.

## Commands to be run 

- npx create-next-app <projectname> 
- npm add axios swr react-hook-form zod @hookform/resolvers
- nnpm install react-hot-toast


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js/) -
- [swr] Integrate SWR (React Hooks library) for seamless data fetching
- [Zod] A TypeScript-based schema validation library that helps you validate form inputs,API responses, database records, etc., providing type inference, custom error messages, and much more.
- [@hookform/resolvers] Implement robust form validation with Zod and @hookform/resolvers
- [Axios] used for making HTTP requests from the frontend to the backend.
- [react-hook-form]  Enhance your forms using React Hook Form, a powerful library for managing forms in React
- [react-hot-toast] used for Toaster messages.


# What you will learn
- How to make network request from a React.js application
- Basic Next.js routing
- Form validation with Zod
- Building forms with react-hook-form

# Minor server refactoring
- Add get current user route

# Registration page
- A form for registering a user
- Network request to register a user

# Login page
- A form for logging a user in
- Network request to log the the user in
- Get logged in user
- Network request to get the current user

# What we will use
- Next.js
- SWR
- Axios
- Zod
- react-hook-form
- react-hot-toast
![React_Logo_SVG](https://github.com/pooja2s/ui-nextjs-reactjs-nodejs/assets/90834017/40d0087b-dc22-4985-a3a3-a3a726030455)<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-11 -10.13 22 20.27">
  <circle r="2" fill="#087ea4"/>
  <g stroke="#087ea4">
    <ellipse rx="10" ry="4.5"/>
    <ellipse rx="10" ry="4.5" transform="rotate(60)"/>
    <ellipse rx="10" ry="4.5" transform="rotate(120)"/>
  </g>
</svg>


===============================================================
### SERVER : 

# Build A Restful Api With Node.js Express MongoDB Joi and JWT token authentication bcryptjs encryption Express-generator File Upload Using Multer Pagination | Rest Api Tutorial

===============================================================
This article will show you how to create a RESTful API with Node.js, Express framework, Express-generator, Joi and JWT token authentication, and image upload using the fs module and Multer.


This tutorial will teach you all CRUD operations i.e. user register and login with a JWT token. Once logged in, the user may add, update, and remove posts, as well as update all of them with post pictures. Also, the user can edit his profile and profile image.

Also you will find Pagination in All post API which is achive using aggrariate dunction in node js .


===============================================================

In this tutorial, we will build a RESTful API using the following technologies:
- [Node.js](https://nodejs.org/) as our server platform.
- [Express](http://expressjs.com/) to handle HTTP requests and responses.
- [MongoDB](https://www.mongodb.com/) as our NoSQL database for storing user data.
- [Joi](https://github.com/hapijs/joi) for [validating input](https://github.com/dwyl/learn-rest-api #validate-input).
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken "Auth0's jsonwebtoken library") for generating JSON Web Tokens (JWT),
- [Body-parser ](https://github.com/expressjs/body-parser "Body Parser Middleware") to parse JSON and URL encoded form data.
- [Express-generator](http://expressjs.com/starter/generator.html) to create a new Express project with all necessary files already set up.
- [Multer](https://www.npmjs.com/package/multer) middleware for handling multipart/form-data, which is primarily used for uploading files. 

===============================================================

To get started, make sure you have Node.js installed on your machine. You can download
it from [here](https://nodejs.org/en/download/). After installing Node.
you should be able to run JavaScript code using the `node` command in your terminal.</s>

Let's start by installing the required dependencies. Open your terminal or command prompt, navigate to your desired project directory, and run the following commands:

npm init -y
npx express-generator
npm install express nodemon 
npm install mongodb 
npm install dotenv
npm install body-parser 
npm install cors 
npm install multer
npm i jsonwebtoken 
npm i bcryptjs 
npm i @hapi/joi

# Server Setup
## Create a new file called "app.js" in the root directory of your project folder javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(express.json()); // Parses JSON bodies
app.use('/public', express.static('public')); // Serve static files
var router = require('./routes')
app.use("/",router)
// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));

# Validation Run:
npm i @hapi/joi

# Password encryption Run:
npm i bcryptjs --save


# JWT token Run:
npm i jsonwebtoken --save

# File Upload
npm install multer

# Server Run
npm start / nodemon start


# Routes Folder
Create a new folder named 'routes' inside the main folder (not inside 'src'). This is
where all your routes will go. Inside the 'routes' folder create two more folders:
'auth', 'user' and 'post'. 

# Controller Folder
Inside each route folder ('auth','user','post'), create a new JS file that serves as
a controller for handling requests and responses related to that specific route. For example, if we are creating
a controller for handling requests and responses related to that specific route. For example,
if we are building an API for posts, there would be one file in controller i.e. 'post'
for handling everything related to post entries and another in the 'user' file in controller
folder for user operations and  another in the 'auth' file in controller
folder for user authentication. Each controller have methods corresponding
to HTTP methods like get(), post(), patch(), delete() etc. 

# Middleware Folder
This is where you can store custom middleware functions if needed. If you don’t need any
custom middleware, feel free to skip this step. Otherwise, create a new folder called “middle
ware” in the main folder. Then, within the middleware folder, create a new JavaScript file
called “index.js”. In this file, export your desired middleware functions using module.exports
syntax. Remember to import these middleware functions into their respective route handlers
using require().

In this project we have used three middleware 
-[Upload] Here we have used Multer for handling multipart/form-data
-[Validation] Here we have used JOI to validate the form request data
-[VerifyToken] It is used to verify JWT authentication token

# Config Folder
The config folder contains configuration settings such as database connection Code.

# Bin Folder
Contains scripts for starting and stopping server. You can name them anything but it is common practice to name
Contains scripts meant to run when certain commands are executed. You can use npm
scripts instead of bin scripts if you prefer. 
In our project the file name is www. It is automatically created then we run npx express-generator


# Credentials you can use for login:
email : ritika@yopmail.com
password : 123456789

# Database collection
The database is created with two table users and posts. You can add more data if needed.


# MongoDB
To connect your node application to MongoDB using mongoose, first install it by running `npm install mongoose --save 
npm install mongodb --save `. Then follow these steps:
- Create ".env" file in root folder.
- Add the following code in your file (.env):
DB_CONNECTION = mongodb+srv://username:password@nodejsapimongo.ppkierw.mongodb.net/
TOKEN_SECRET = dhkanfijvhznfsdjfhsdf

# Postman
To test API endpoints you can use Postman from https://www.getpostman.com . Just open Postman app and import "api.postman_collection.json". You will find the collection in the folder itself.</s>


# ENV File
Add .env file in the root directory and put all the credentials there.

DB_CONNECTION = mongodb+srv://username:password@database.qr7ibbh.mongodb.net/
PORT = 3001
TOKEN_SECRET = dhkanfijvhznfsdjfhsdf
BASE_URL = http://localhost:3001

You will get the DB_CONNECTION URL while creating the database on https://www.mongodb.com/.

