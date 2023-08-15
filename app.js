const express = require("express");
const booksRoute = require("./src/routes/books");
const cors = require("cors");
const path = require("path");

const app = express();

const port = 8000;

app.use(express.json());
app.use(cors({origin: "*"}));

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.use('/books', booksRoute);

app.listen (port, ()=> {
    console.log(`Listening on port ${port}`);
})