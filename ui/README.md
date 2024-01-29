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
