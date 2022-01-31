// Import Express
const express = require("express");
//Connect DB
//  import mongodb condb
const { connectDb, getDb } = require("../config/condb");
connectDb(() => (db = getDb()));

// var db = require("monk")("localhost:27017/LoginDB");
const router = express.Router();
var moment = require("moment");
const { Result } = require("express-validator");

router.get("", (req, res) => {
  res.render("pages/backend/dashbord", {
    title: "หน้าหลัก Admin",
    heading: "Backendadmin",
    layout: "./layouts/adminbackend",
  });
});

router.get("/emp_creatposition", async (req, res) => {
  const emp_users = await db.collection("emp_users").find({}).toArray();
  res.json(emp_users);
  // res.render("pages/backend/emp_creatposition", {
  //   title: "หน้าหลัก Admin",
  //   heading: "Backendadmin",
  //   layout: "./layouts/adminbackend",
  // });
});

router.get("/admin_hr", async (req, res) => {
  const admin_hr = await db.collection("admin_hr").find({}).toArray();
  // res.json(admin_hr);
  res.render("pages/backend/admin_hr", {
    title: "admin_hr",
    heading: "admin_hr",
    layout: "./layouts/adminbackend",
    data: admin_hr,
    moment: moment,
  });
});

router.get("/create_hr", (req, res) => {
  res.render("pages/backend/create_hr", {
    title: "หน้าหลัก Admin",
    heading: "Backendadmin",
    layout: "./layouts/adminbackend",
  });
});
// การ insert data
router.post("/create_hr", async (req, res) => {
  let hr_id = req.body.hr_id;
  let name_hr = req.body.name_hr;
  let lastname_hr = req.body.lastname_hr;
  let level = req.body.level;
  let password = req.body.password;
  // console.log(hr_id + name_hr + lastname_hr + level + password);
  await db.collection("admin_hr").insertOne({
    hr_id: parseInt(hr_id),
    name_hr: name_hr,
    lastname_hr: lastname_hr,
    level: parseInt(level),
    password: password,
    createdateDate: "2021-11-21T17:00:00.000Z",
  });
  res.render("pages/backend/create_hr", {
    title: "หน้าหลัก Admin",
    heading: "Backendadmin",
    layout: "./layouts/adminbackend",
  });
});

// router.post("/create_hr", (req, res) => {});

// router.get("/emp_creatposition", async (req, res) => {
//   const admin_hr = await db.collection("admin_hr").find({}).toArray();
//   // res.json(admin_hr);
// });
// router.get("/emp_creatposition", function (req, res, next) {
//   var users = db.get("emp_users");
//   users.find({}, {}, function (err, usersemp) {
//     res.render("pages/backend/emp_creatposition", {
//       postsuser: usersemp,
//       moment: moment,
//       title: "creatposition",
//       layout: "./layouts/adminbackend",
//     });
//   });
// // });
// router.post("/emp_creatposition", function (req, res, next) {
//   if (!Result.isEmpty()) {
//   } else {
//     posts.insert(
//       {
//         title: req.body.title,
//         title: req.body.title,
//         title: req.body.title,
//         title: req.body.title,
//         date: new Date(),
//       },
//       function (err, success) {
//         if (err) {
//           res.send(err);
//         } else {
//           res.location("/");
//           res.redirect("/");
//         }
//       }
//     );
//   }
// });

// router.post(
//   "/emp_creatposition",
//   [
//     check("emp_id", "กรุณาป้อนชื่อบทความ").not().isEmpty(),
//     check("emp_type", "กรุณาป้อนเนื้อหา").not().isEmpty(),
//     check("emp_name", "กรุณาใส่ภาพปก").not().isEmpty(),
//     check("emp_lastname", "กรุณาใส่ภาพปก").not().isEmpty(),
//     check("emp_gender", "กรุณาใส่ภาพปก").not().isEmpty(),
//     check("emp_birthday", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//     check("emp_datein", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//     check("emp_dateout", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//     check("emp_status", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//     check("emp_salary", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//     check("emp_extra", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//   ],

//     posts.insert(
//       {
//         emp_id: req.body.emp_id,
//         emp_type: req.body.emp_type,
//         emp_name: req.body.emp_name,
//         emp_lastname: req.body.emp_lastname,
//         emp_gender: req.body.emp_gender,
//         emp_birthday: req.body.emp_birthday,
//         emp_datein: req.body.emp_datein,
//         emp_dateout: req.body.emp_dateout,
//         emp_status: req.body.emp_status,
//         emp_salary: req.body.emp_salary,
//         emp_extra: req.body.emp_extra,
//         date: new Date(),
//       },
//       function (err, success) {
//         if (err) {
//           res.send(err);
//         } else {
//           res.location("/");
//           res.redirect("/");
//         }
//       }
//     );
//   }
// );

module.exports = router;
