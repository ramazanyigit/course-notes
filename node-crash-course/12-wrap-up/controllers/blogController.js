const Blog = require("../models/blog");

const index = (_req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) /// Descending sort
    .then((blogs) => {
      res.render("blogs/index", { title: "Home", blogs });
    })
    .catch(() => {
      res.render("blogs/index", { title: "Home", blogs: [] });
    });
};

const details = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog Details" });
    })
    .catch(() => res.status(404).render("404", { title: "Blog not found " }));
};

const createGet = (_req, res) => {
  res.render("blogs/create", { title: "Create a new blog" });
};

const createPost = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then(() => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteById = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(() => res.json({ redirect: "/blogs" }))
    .catch((err) => res.status(500).send(err));
};

module.exports = {
  createGet,
  createPost,
  deleteById,
  details,
  index,
};
