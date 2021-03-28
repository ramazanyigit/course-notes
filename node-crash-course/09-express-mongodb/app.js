const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const dbURI = "mongodb://localhost:27017/test";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: {
      authSource: "admin",
    },
    user: "root",
    pass: "example",
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log("cannot connect to db: ", err));

// Create express app.
const app = express();

// Register view engine
app.set("view engine", "ejs");
// Uncomment if the views directory is different than the 'views' directory
// app.set('views', 'myviews');

// Listen for requests.

// app.use((req, res, next) => {
//   /// log some request details...
//   console.log("host", req.hostname);
//   console.log("path", req.path);
//   console.log("method", req.method);

//   /// go to next method.
//   next();
// });

// === middlewares ===
// Activate morgan
app.use(morgan("dev"));

// Activate static file server.
app.use(express.static("public"));

// === routes ===

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) /// Descending sort
    .then((blogs) => {
      res.render("index", { title: "Home", blogs });
    })
    .catch(() => {
      res.render("index", { title: "Home", blogs: [] });
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
