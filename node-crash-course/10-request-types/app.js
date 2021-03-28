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

// === middlewares ===
// Activate morgan
app.use(morgan("dev"));

// Parse URL encoded data to JavaScript Object
app.use(express.urlencoded({ extended: true }));

// Activate static file server.
app.use(express.static("public"));

// === routes ===
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

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) =>
      res.render("details", { blog: result, title: "Blog Details" })
    )
    .catch(() => res.redirect("/blogs"));
});

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(() => res.json({ redirect: '/blogs' }))
    .catch((err) => res.status(500).send(err));
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
