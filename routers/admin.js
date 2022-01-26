// Import Express
const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
  res.render("pages/frontend/index", { title: "หน้าหลัก" });
});
router.get("", (req, res) => {
  res.render("pages/frontend/about", { title: "เกี่ยวกับเรา" });
});
router.get("/login", (req, res) => {
  res.render("pages/frontend/login", { title: "เข้าสู่ระบบ" });
});
router.get("", (req, res) => {
  res.render("pages/frontend/register", { title: "สมัครสมาชิก" });
});
module.exports = router;
