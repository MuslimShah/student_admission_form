const express = require("express");
//requiring user routes
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
//==>controller for user routes
const controller = require("./controllers/404");
const sequelize = require("./util/database");
const port = 4000;
const app = express();
//==>body parser
app.use(express.urlencoded({ extended: true }));
//==> set views
app.set("views", "views");
// ==>set view engine
app.set("view engine", "ejs");
//==> set static
app.use(express.static("public"));
app.use("/admin", adminRoutes);
app.use("/", userRoutes);
// ==>404
app.use(controller.pageNotFound);
//synchronizing models
sequelize
  .sync()
  .then((result) => {
    app.listen(port, () => console.log(`got connected : ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });


//==>listening on port
