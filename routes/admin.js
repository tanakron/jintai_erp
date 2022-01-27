// Import Express
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/backend/dashbord", {
    title: "หน้าหลัก Admin",
    heading: "Profile",
    layout: "./layouts/backend",
  });
});

module.exports = router;
