const router = require("express").Router();
const bookRoutes = require("./booksApi");

router.use("/books", bookRoutes);

module.exports = router;
