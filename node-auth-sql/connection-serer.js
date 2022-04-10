// this is the server .
const app = express();
const port = 5000;  // ths is the port start
const express = require("express");
app.listen(port, () => {
    console.log('The server started at port', {port});
});
