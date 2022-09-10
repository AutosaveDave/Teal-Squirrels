const express = require("express");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3006;
const sequelize = require("./config/connection");
const controllers = require("./controllers");
const { User } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("doing the thing fr fr"));
});
