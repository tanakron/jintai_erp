// Import Express
const express = require("express");
// Import Router backend.js
const adminRouter = require("./routers/admin");
// Import Router frontend.js
const usersRouter = require("./routers/users");
// Import EJS Layout
var expressLayouts = require("express-ejs-layouts");

// Create express object
const app = express();

// กำหนด Folder สำหรับบอกตัว express ว่าไฟล์ css , images อยู่ path ไหน
app.use(express.static("assets"));

// กำหนด Template Engine
app.use(expressLayouts);

app.set("view engine", "ejs");

// เรียกใช้งาน Routes
app.use("/", usersRouter);
app.use("/", adminRouter);
// Run Express Server ที่ Port 5000
app.listen(5000, () => {
  console.log("Server run at port 5000");
});
