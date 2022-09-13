const path = require("path");
const express = require("express");
const session =require("express-session");
const { sequelize, sessionConfig } = require("./config/connection");
const exphbs = require("express-handlebars");
const controllers = require("./controllers");
const helpers = require("./utils/helper.js");

const session =require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//const sess ={
//    secret: 'keep your password safe',
//    cookie: {},
//    resave: false,
//    saveUnitialized:true,
//    store: new SequelizeStore({
//        db: sequelize,
//    }),
//},

const PORT = process.env.PORT || 3006;

const app = express();
const hbs = exphbs.create({ helpers });
const passport = require("passport");
const passportConfig = require("./config/passport");

app.use(session(sessionConfig));
app.use (express.json());
app.use(express.urlencoded({ extended: true}));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));


app.use(controllers);

sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, () => console.log("doing the thing fr fr"));
);
