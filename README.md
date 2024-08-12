# Globus API Proxy Server

This is a proxy server for making REST requests to the Globus API. It is a simple server that allows you to make requests to the Globus API and get the response in JSON format.

## Components of Project
1. API / Server for interacting with Globus SOAP API
2. Vite Front End

## How to use

1. Clone the current repository
2. Run `npm install` to install the dependencies for the root directory
3. Start the API proxy server by running `npm run dev:start` from the root directory
4. Open a second terminal tab and navigate to `cd client`
5. Run `npm install` to install the dependencies for the Vite project
6. Run `npm run dev` to start the Vite Front End
7. Navigate to any endpoint at `localhost:8000/api/v1/globus${endpoint}` to test
