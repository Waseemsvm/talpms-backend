import express from "express";//import express library
import path from "path";//import the path library
import dotenv from 'dotenv';
dotenv.config();//import and configure the environment variables

// Create a new express application instance
const app = express();//create a new express app instance

// Set the network port
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..","dist")));//absolute path for express server to serve the static files

// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});