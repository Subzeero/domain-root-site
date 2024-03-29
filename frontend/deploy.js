// deploy.js - Node script to serve frontend build with Express.js
// Subzeero (Zander Rommelaere)
// January 16, 2024

import express from "express";
import path from "path";
const app = express();

console.log("Starting frontend...");

app.use(express.static("dist"));
app.use((_req, resp) => {
  resp.sendFile(path.join(path.resolve(), "dist", "index.html"));
});

app.listen(3000);
console.log("Frontend Running!");
