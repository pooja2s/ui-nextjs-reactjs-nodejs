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


![Nextjs-logo](https://github.com/pooja2s/ui-nextjs-reactjs-nodejs/assets/90834017/2fe27b4a-aeed-4fa8-a09c-e781c2725a99)<svg width="394" height="80" viewBox="0 0 394 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" fill="black"/>
<path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" fill="black"/>
<path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" fill="black"/>
<path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill="black"/>
<path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" fill="black"/>
<path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" fill="black"/>
<path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" fill="black"/>
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


![Node js_logo](https://github.com/pooja2s/ui-nextjs-reactjs-nodejs/assets/90834017/cb7a46e1-318d-48ee-a082-f175b7bf209f)<svg xmlns="http://www.w3.org/2000/svg" width="589.827" height="361.238" version="1.2" viewBox="0 0 442.37 270.929"><defs><clipPath id="a"><path d="M239.03 226.605l-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68-.88 0-1.76.227-2.55.68"/></clipPath><linearGradient id="b" x1="-.348" x2="1.251" gradientTransform="rotate(116.114 53.1 202.97) scale(86.48)" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#3E863D"/><stop offset=".5" stop-color="#55934F"/><stop offset=".8" stop-color="#5AAD45"/></linearGradient><clipPath id="c"><path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39c-.414-.24-.863-.41-1.32-.53zm0 0"/></clipPath><linearGradient id="d" x1="-.456" x2=".582" gradientTransform="rotate(-36.46 550.846 -214.337) scale(132.798)" gradientUnits="userSpaceOnUse"><stop offset=".57" stop-color="#3E863D"/><stop offset=".72" stop-color="#619857"/><stop offset="1" stop-color="#76AC64"/></linearGradient><clipPath id="e"><path d="M241.066 225.953c-.707.07-1.398.29-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336c1.3-.754 2.19-2.03 2.46-3.476l-46.18-78.89c-.34-.067-.68-.102-1.03-.102-.14 0-.28.007-.42.02"/></clipPath><linearGradient id="f" x1=".043" x2=".984" gradientTransform="translate(192.862 279.652) scale(97.417)" gradientUnits="userSpaceOnUse"><stop offset=".16" stop-color="#6BBF47"/><stop offset=".38" stop-color="#79B461"/><stop offset=".47" stop-color="#75AC64"/><stop offset=".7" stop-color="#659E5A"/><stop offset=".9" stop-color="#3E863D"/></linearGradient></defs><path fill="#689f63" d="M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04c-2.59-1.5-4.19-4.3-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08c2.58 1.49 4.19 4.28 4.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07c-1.28.74-2.73 1.12-4.21 1.12"/><path fill="#689f63" d="M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98.03.33-.09.65-.31.89-.22.23-.53.37-.85.37h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7"/><path fill="#333" fill-rule="evenodd" d="M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37c-.715-.42-1.516-.64-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105C.984 87.025 0 88.715 0 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88c0-1.83.97-3.52 2.555-4.43l10.72-6.174c.796-.46 1.67-.688 2.56-.688.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41c.79.47 1.773.47 2.56 0 .776-.45 1.268-1.3 1.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386c-.395.227-.883.227-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324c-.794-.442-1.76-.43-2.544.027-.78.46-1.262 1.3-1.262 2.21v65c0 .64-.34 1.23-.894 1.55-.55.32-1.235.32-1.79 0L281.634 63c-1.58-.914-3.526-.914-5.112 0l-42.37 24.453c-1.583.91-2.56 2.6-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863c0-1.856-1.01-3.563-2.63-4.47zm141.093 107.164c1.574-.914 2.543-2.602 2.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44c-1.59-.92-3.54-.92-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0"/><path fill="#689f63" fill-rule="evenodd" d="M394.538 105.2c.3-.177.676-.177.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69c-.304.177-.68.177-.98 0l-8.125-4.69c-.31-.176-.5-.5-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0"/><g clip-path="url(#a)" transform="translate(-78.306 -164.016)"><path fill="url(#b)" d="M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"/></g><g clip-path="url(#c)" transform="translate(-78.306 -164.016)"><path fill="url(#d)" d="M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0"/></g><g clip-path="url(#e)" transform="translate(-78.306 -164.016)"><path fill="url(#f)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0"/></g></svg>


    
![MongoDB_Fores-Green](https://github.com/pooja2s/ui-nextjs-reactjs-nodejs/assets/90834017/8c4324a7-dc82-4189-a7da-26736f6d43bf)<svg fill="none" height="158.829658" viewBox="0 0 1102 278" width="629.605335" xmlns="http://www.w3.org/2000/svg"><g fill="#00684a"><path d="m82.3229 28.6444c-10.7862-12.7975-20.0744-25.79495-21.9719-28.494429-.1998-.1999613-.4995-.1999613-.6992 0-1.8976 2.699479-11.1857 15.696929-21.972 28.494429-92.5817 118.0766 14.5815 197.7616 14.5815 197.7616l.8988.6c.7989 12.297 2.7964 29.994 2.7964 29.994h3.9949 3.9949s1.9975-17.597 2.7965-29.994l.8988-.7c.0998.1 107.2634-79.585 14.6813-197.6616zm-22.3715 196.0616s-4.7938-4.099-6.0922-6.199v-.199l5.7926-128.5755c0-.3999.5993-.3999.5993 0l5.7925 128.5755v.199c-1.2983 2.1-6.0922 6.199-6.0922 6.199z"/><path d="m260.501 197.588-44.656-108.2889-.1-.2991h-34.744v7.279h5.607c1.702 0 3.304.6981 4.506 1.8946 1.201 1.1966 1.802 2.7924 1.802 4.4874l-1.001 108.986c0 3.39-2.803 6.182-6.208 6.282l-5.707.1v7.179h33.843v-7.179l-3.505-.1c-3.404-.1-6.208-2.892-6.208-6.282v-102.704l48.662 116.265c.7 1.695 2.302 2.792 4.105 2.792 1.802 0 3.404-1.097 4.105-2.792l47.56-113.673.701 100.112c0 3.49-2.804 6.282-6.308 6.382h-3.605v7.179h39.65v-7.179h-5.407c-3.404 0-6.208-2.892-6.308-6.282l-.3-108.987c0-3.4896 2.803-6.2815 6.208-6.3812l5.807-.0998v-7.279h-33.843z"/><path d="m571.869 216.136c-1.105-1.096-1.707-2.59-1.707-4.382v-53.385c0-10.159-3.011-18.127-9.035-23.804-5.922-5.677-14.154-8.565-24.393-8.565-14.356 0-25.699 5.777-33.63 17.131-.1.199-.401.299-.702.299-.302 0-.502-.2-.502-.498l-3.715-14.243h-6.224l-15.961 9.064v4.979h4.116c1.907 0 3.513.498 4.618 1.494 1.104.996 1.706 2.49 1.706 4.582v62.846c0 1.793-.602 3.287-1.706 4.382-1.105 1.096-2.61 1.693-4.417 1.693h-4.016v7.271h36.741v-7.271h-4.015c-1.807 0-3.313-.597-4.417-1.693-1.104-1.095-1.707-2.589-1.707-4.382v-41.632c0-5.279 1.205-10.557 3.414-15.736 2.308-5.08 5.721-9.362 10.239-12.649 4.517-3.287 9.938-4.88 16.162-4.88 7.027 0 12.348 2.191 15.66 6.573 3.313 4.382 5.02 10.059 5.02 16.832v51.392c0 1.793-.603 3.287-1.707 4.383-1.104 1.095-2.61 1.693-4.417 1.693h-4.015v7.27h36.741v-7.27h-4.015c-1.506.199-2.912-.399-4.116-1.494z"/><path d="m907.546 97.212c-10.156-5.4079-21.507-8.212-33.754-8.212h-47.792v7.3107h4.68c1.792 0 3.385.701 4.978 2.3034 1.494 1.5019 2.29 3.2049 2.29 5.0069v107.758c0 1.802-.796 3.505-2.29 5.007-1.493 1.502-3.186 2.303-4.978 2.303h-4.68v7.311h47.792c12.247 0 23.598-2.804 33.754-8.212 10.155-5.408 18.42-13.42 24.394-23.634 5.974-10.215 9.06-22.533 9.06-36.554 0-14.02-3.086-26.238-9.06-36.553-6.074-10.415-14.239-18.427-24.394-23.835zm14.238 60.188c0 12.819-2.29 23.634-6.771 32.347-4.48 8.713-10.455 15.222-17.823 19.428-7.367 4.207-15.532 6.31-24.294 6.31h-9.658c-1.792 0-3.385-.701-4.978-2.304-1.494-1.502-2.29-3.204-2.29-5.007v-101.648c0-1.803.697-3.405 2.29-5.008 1.493-1.502 3.186-2.3031 4.978-2.3031h9.658c8.762 0 16.927 2.1031 24.294 6.3091 7.368 4.206 13.343 10.716 17.823 19.429 4.481 8.712 6.771 19.628 6.771 32.447z"/><path d="m1053.97 164.711c-4.42-5.108-12.95-9.414-22.98-11.718 13.85-6.91 20.97-16.624 20.97-29.142 0-6.81-1.8-12.919-5.42-18.127-3.61-5.207-8.73-9.4134-15.25-12.3176-6.53-2.9042-14.16-4.4064-22.79-4.4064h-54.098v7.3107h4.316c1.806 0 3.412.701 5.018 2.3033 1.506 1.502 2.309 3.205 2.309 5.007v107.758c0 1.802-.803 3.505-2.309 5.007-1.505 1.502-3.212 2.303-5.018 2.303h-4.718v7.311h58.72c8.93 0 17.26-1.502 24.79-4.507 7.53-3.004 13.55-7.41 17.87-13.219 4.41-5.808 6.62-12.919 6.62-21.131-.1-8.813-2.71-16.324-8.03-22.432zm-67.349 48.57c-1.506-1.502-2.309-3.204-2.309-5.007v-48.37h27.908c9.83 0 17.36 2.503 22.58 7.51 5.22 5.008 7.83 11.517 7.83 19.529 0 4.807-1.21 9.514-3.41 13.82-2.31 4.407-5.73 7.912-10.34 10.616-4.52 2.704-10.14 4.106-16.66 4.106h-20.581c-1.806.1-3.412-.701-5.018-2.204zm-2.208-63.693v-42.962c0-1.803.702-3.405 2.308-5.008 1.506-1.502 3.212-2.303 5.019-2.303h13.25c9.53 0 16.56 2.404 20.98 7.01 4.41 4.707 6.62 10.716 6.62 18.127 0 7.611-2.11 13.72-6.22 18.327-4.12 4.506-10.34 6.809-18.57 6.809z"/><path d="m431.999 132.387c-7.67-4.191-16.236-6.387-25.499-6.387s-17.929 2.096-25.499 6.387c-7.67 4.192-13.746 10.28-18.228 17.965s-6.773 16.668-6.773 26.648 2.291 18.963 6.773 26.648 10.558 13.773 18.228 17.965c7.67 4.191 16.236 6.387 25.499 6.387s17.929-2.096 25.499-6.387c7.67-4.192 13.746-10.28 18.228-17.965s6.773-16.668 6.773-26.648-2.291-18.963-6.773-26.648-10.558-13.673-18.228-17.965zm7.371 44.613c0 12.276-2.988 22.256-8.965 29.442-5.876 7.186-13.944 10.879-23.905 10.879-9.96 0-18.029-3.693-23.905-10.879-5.977-7.186-8.965-17.166-8.965-29.442s2.988-22.256 8.965-29.442c5.876-7.186 13.945-10.879 23.905-10.879 9.961 0 18.029 3.693 23.905 10.879 5.977 7.285 8.965 17.166 8.965 29.442z"/><path d="m784.999 132.387c-7.67-4.191-16.236-6.387-25.499-6.387s-17.929 2.096-25.499 6.387c-7.67 4.192-13.746 10.28-18.228 17.965s-6.773 16.668-6.773 26.648 2.291 18.963 6.773 26.648 10.558 13.773 18.228 17.965c7.67 4.191 16.236 6.387 25.499 6.387s17.929-2.096 25.499-6.387c7.67-4.192 13.746-10.28 18.228-17.965s6.773-16.668 6.773-26.648-2.291-18.963-6.773-26.648-10.658-13.673-18.228-17.965zm7.371 44.613c0 12.276-2.989 22.256-8.965 29.442-5.877 7.186-13.945 10.879-23.905 10.879-9.961 0-18.029-3.693-23.905-10.879-5.977-7.186-8.965-17.166-8.965-29.442 0-12.376 2.988-22.256 8.965-29.442 5.876-7.186 13.944-10.879 23.905-10.879 9.96 0 18.028 3.693 23.905 10.879 5.877 7.285 8.965 17.166 8.965 29.442z"/><path d="m642.64 126c-8.026 0-15.348 1.704-21.969 5.113s-11.837 8.022-15.549 13.937c-3.711 5.815-5.617 12.333-5.617 19.251 0 6.216 1.404 11.931 4.313 17.045 2.809 4.913 6.621 9.023 11.436 12.432l-14.345 19.452c-1.806 2.406-2.006 5.614-.702 8.221 1.404 2.707 4.012 4.312 7.022 4.312h4.113c-4.013 2.707-7.223 5.915-9.43 9.725-2.608 4.312-3.912 8.823-3.912 13.435 0 8.623 3.812 15.742 11.335 21.056 7.424 5.314 17.856 8.021 30.997 8.021 9.129 0 17.856-1.504 25.781-4.412 8.025-2.907 14.545-7.219 19.36-12.833 4.916-5.615 7.424-12.433 7.424-20.254 0-8.221-3.01-14.037-10.032-19.651-6.018-4.713-15.448-7.219-27.185-7.219h-40.125c-.1 0-.201-.101-.201-.101s-.1-.2 0-.3l10.433-14.037c2.809 1.303 5.417 2.105 7.724 2.606 2.407.502 5.116.702 8.125.702 8.427 0 16.051-1.704 22.671-5.113 6.621-3.409 11.938-8.021 15.75-13.937 3.811-5.815 5.717-12.332 5.717-19.25 0-7.42-3.611-20.956-13.442-27.874 0-.1.101-.1.101-.1l21.567 2.406v-9.926h-34.508c-5.417-1.805-11.034-2.707-16.852-2.707zm12.037 62.665c-3.812 2.005-7.925 3.108-12.037 3.108-6.721 0-12.64-2.406-17.656-7.119-5.015-4.712-7.523-11.63-7.523-20.453 0-8.824 2.508-15.742 7.523-20.454 5.016-4.713 10.935-7.119 17.656-7.119 4.213 0 8.225 1.003 12.037 3.108 3.812 2.005 6.922 5.114 9.43 9.224 2.407 4.111 3.711 9.225 3.711 15.241 0 6.116-1.204 11.229-3.711 15.24-2.408 4.11-5.618 7.219-9.43 9.224zm-27.185 36.997h27.185c7.524 0 12.339 1.504 15.549 4.713 3.21 3.208 4.815 7.519 4.815 12.533 0 7.319-2.909 13.335-8.727 17.847-5.819 4.512-13.643 6.818-23.273 6.818-8.427 0-15.449-1.905-20.565-5.515-5.116-3.609-7.724-9.124-7.724-16.142 0-4.412 1.204-8.523 3.612-12.132 2.407-3.61 5.316-6.217 9.128-8.122z"/><path d="m1082.35 224.327c-1.98-1.083-3.47-2.658-4.66-4.528-1.09-1.968-1.69-4.035-1.69-6.299s.6-4.429 1.69-6.299c1.09-1.969 2.68-3.445 4.66-4.528 1.99-1.082 4.17-1.673 6.65-1.673s4.66.591 6.65 1.673c1.98 1.083 3.47 2.658 4.66 4.528 1.09 1.968 1.69 4.035 1.69 6.299s-.6 4.429-1.69 6.299c-1.09 1.969-2.68 3.445-4.66 4.528-1.99 1.082-4.17 1.673-6.65 1.673-2.38 0-4.66-.591-6.65-1.673zm12.21-1.477c1.68-.885 2.88-2.263 3.87-3.838.89-1.673 1.39-3.544 1.39-5.61 0-2.067-.5-3.937-1.39-5.611-.9-1.673-2.19-2.952-3.87-3.838-1.69-.886-3.48-1.378-5.56-1.378s-3.87.492-5.56 1.378c-1.68.886-2.88 2.264-3.87 3.838-.89 1.674-1.39 3.544-1.39 5.611 0 2.066.5 3.937 1.39 5.61.9 1.673 2.19 2.953 3.87 3.838 1.69.886 3.48 1.378 5.56 1.378s3.97-.492 5.56-1.378zm-10.92-3.444v-.886l.2-.099h.6c.19 0 .39-.098.49-.197.2-.196.2-.295.2-.492v-9.153c0-.197-.1-.394-.2-.492-.2-.197-.3-.197-.49-.197h-.6l-.2-.099v-.885l.2-.099h5.16c1.49 0 2.58.295 3.47.984.9.689 1.29 1.575 1.29 2.756 0 .886-.29 1.772-.99 2.362-.69.689-1.49 1.083-2.48 1.182l1.19.393 2.28 3.642c.2.295.4.394.7.394h.59l.1.098v.886l-.1.098h-3.07l-.2-.098-3.18-5.315h-.79v3.543c0 .197.1.394.2.492.2.197.3.197.49.197h.6l.2.099v.886l-.2.098h-5.26zm5.06-6.398c.8 0 1.49-.197 1.89-.689.39-.394.69-1.083.69-1.87 0-.788-.2-1.378-.59-1.87-.4-.492-1-.689-1.69-.689h-.4c-.2 0-.39.098-.49.197-.2.196-.2.295-.2.492v4.429z"/></g></svg>



