// importo express nel file 

const express = require("express");
const app = express();
const port = 3000;

//assets statici di expressjs (middleware)

app.use(express.static('public'));

// rotta path "home"

app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})