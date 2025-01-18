# Intelermate

Intelermate is a platform that connects talented students with innovative startups, providing meaningful internship opportunities and helping startups access fresh talent for innovation and growth.

## Project Structure

The project is divided into two main directories: `frontend` and `backend`.

### Frontend

The frontend is built using React and Vite. It includes various components and pages to provide a seamless user experience.

#### Directory Structure
frontend/ ├── .env ├── .gitignore ├── eslint.config.js ├── index.html ├── package.json ├── postcss.config.js ├── public/ │ └── vite.svg ├── README.md ├── src/ │ ├── App.jsx │ ├── assets/ │ │ └── react.svg │ ├── Components/ │ │ └── ... │ ├── fonts/ │ ├── index.css │ ├── logo/ │ ├── main.jsx │ ├── pages/ │ │ └── ... ├── tailwind.config.js ├── vercel.json └── vite.config.js


### Backend

The backend is built using Node.js, Express, and MongoDB. It includes models, routes, and controllers to handle API requests and manage data.

#### Directory Structure
backend/ ├── .env ├── models/ │ ├── Founder.js │ └── Intern.js ├── package.json ├── routes/ │ ├── founderRoutes.js │ └── internRoutes.js ├── server.js └── uploads/ └── ...


## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Frontend

1. Navigate to the `frontend` directory:

   ```sh
   cd frontend

   npm install


### Backend

1. Navigate to the [backend](http://_vscodecontentref_/3) directory:

cd backend


npm install
node server.js

## Usage
### Frontend
Access the frontend application at http://localhost:3000.
Explore various pages and components to find internships, hire interns, and more.
### Backend
The backend server runs at http://localhost:5000.
Use the provided API endpoints to manage data for interns and founders.

# Environment Variables
Create a .env file in both the frontend and backend directories and add the following environment variables:
VITE_API_BASE_URL=http://localhost:5000/api
MONGO_URI=mongodb://localhost:27017/intelermate
PORT=5000


Deployment
Vercel
The frontend is configured to be deployed on Vercel. Ensure that the vercel.json file is present in the frontend directory with the following content:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}

Render
The backend can be deployed on Render. Ensure that the environment variables are set correctly in the Render dashboard.

