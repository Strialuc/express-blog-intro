// importo express nel file 

const express = require("express");
const app = express();
const port = 3000;

//asset statici di expressjs (middleware)

app.use(express.static('public'));