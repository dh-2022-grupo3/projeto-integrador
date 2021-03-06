const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");

const indexRouter = require("./src/routes/index");
const cadastroRouter = require("./src/routes/cadastro");
const loginRouter = require("./src/routes/login");
const forgotRouter = require("./src/routes/forgot");
const homeRouter = require("./src/routes/home");
const customizacaoRouter = require("./src/routes/customizacao");
const chartRouter = require("./src/routes/chart");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "pj7xBF2@%QyZ!8m",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/cadastro", cadastroRouter);
app.use("/login", loginRouter);
app.use("/forgot", forgotRouter);
app.use("/home", homeRouter);
app.use("/customizacao", customizacaoRouter);
app.use("/chart", chartRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
