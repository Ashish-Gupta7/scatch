const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hey it's product router");
});

module.exports = router;