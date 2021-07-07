const express = require("express");
const router = express.Router();

router.post("/api/cards", require("./api/cards"));
router.post("/api/void", require("./api/void"));

router.get("/", require("./api"));

module.exports = router;
