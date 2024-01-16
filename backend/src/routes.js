// routes.js - Node script to route URLs to matching controller logic
// Subzeero (Zander Rommelaere)
// January 16, 2024

const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

// Endpoints
router.get("^/api/count$", controllers.count);
router.get("^/api/?$", controllers.root);
router.all("*", controllers.notFound404);

module.exports = router;
