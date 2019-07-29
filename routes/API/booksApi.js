const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// ---===C R U D===---
// (C)R(UD)
router.route("/")
    .get(booksController.findAll);

// C(RUD)
router.route("/add")
    .post(booksController.create);

// (CR)U(D)
router.route("/update")
    .post(booksController.update);

// (CRU)D
router.route("/remove/:id")
    .get(booksController.remove);

module.exports = router;
