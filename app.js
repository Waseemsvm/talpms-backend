const express = require('express');
const path = require('path');
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "dist")));

app.listen(PORT, e => {
    console.log(`listening on ${PORT}`);
});