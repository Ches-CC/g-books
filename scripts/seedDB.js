const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksDB");

const bookSeed = [
    {
        authors: ["Delia Owens"],
        description: "NYTimes Best Seller; has crawdads, how bad could it be?",
        image: "image.png",
        link: "http://www.google.com",
        title: "Where the Crawdads Sing"
    },
    {
        authors: ["Elin Hilderbrand"],
        description: "Appears to be about surfing, maybe?",
        image: "image.png",
        link: "http://www.google.com",
        title: "Summer of '69"
    },
    {
        authors: ["Brad Thor"],
        description: "Made up book by a made up author; actually a book",
        image: "image.png",
        link: "http://www.google.com",
        title: "Backlash: A Thriller"
    },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });