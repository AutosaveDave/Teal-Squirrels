const express = require("express");
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3006;
const sequelize = require("./config/connection")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Werking.");
});

sequelize.sync({})
app.listen(PORT, () => console.log("doing the thing fr fr"));

app.use(routes);
