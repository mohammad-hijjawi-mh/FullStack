const express = require("express");
const router = express.Router();
const test = require("../models/test");

router.get("./dashboard", (req, res) => {
    res.render("dashboard");
})


router.post("/dashboard", (req, res) => {
    console.log(req.body);
});

module.exports = router;

//app.use("/test",require("./routes/test"))