// Import Express
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/backend/dashbord", {
    title: "หน้าหลัก Admin",
    heading: "Backendadmin",
    layout: "./layouts/adminbackend",
  });
});
router.get("/emp_creatposition", (req, res) => {
  res.render("pages/backend/emp_creatposition", {
    title: "creatposition",
    heading: "Backendadmin",
    layout: "./layouts/backendadmin/backend",
  });
});
module.exports = router;
