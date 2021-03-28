const express = require("express");

// Create express app.
const app = express();

// Register view engine
app.set("view engine", "ejs");
// Uncomment if the views directory is different than the 'views' directory
// app.set('views', 'myviews');

// Listen for requests.
app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Blog Content 1",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Blog Content 2",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Blog Content 3",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
