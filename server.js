if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layouts");
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ limit: "10mb", extended: false }));

// mongoose conection
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
});
db.once("open", () => console.log("Connected to Mongoose"));

// routes
app.use("/", indexRouter);
app.use("/authors", authorRouter);

app.listen(process.env.PORT || 3000);
