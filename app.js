const express = require("express");

const usersRouter = require("./router/users");
const adminRouter = require("./router/admin");
const app = express();
app.use("", usersRouter);
app.use("", adminRouter);
app.use(express.static("assets"));
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
