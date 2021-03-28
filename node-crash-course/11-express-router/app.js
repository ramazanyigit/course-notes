const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes');

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

// Add blog routes
app.use('/blogs', blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
