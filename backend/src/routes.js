const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

// Endpoints
router.get("^/$", controllers.root);
router.get("/count", controllers.count);
router.all("*", controllers.notFound404);

module.exports = router;
