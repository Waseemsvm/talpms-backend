"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //import express library
const path_1 = __importDefault(require("path")); //import the path library
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); //import and configure the environment variables
// Create a new express application instance
const app = (0, express_1.default)(); //create a new express app instance
// Set the network port
const port = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "dist"))); //absolute path for express server to serve the static files
// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});
