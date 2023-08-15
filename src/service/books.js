const fs = require("fs");

function getList() {
    let books = JSON.parse(fs.readFileSync("./src/data/books.json"));

    let newBooks = books.map( book => {
        book.src = "http://localhost:8000/" + book.src;
        return book;
    });

    return newBooks;
}

function getById(id) {
    if (id === undefined) {
        return [];
    }

    const books = JSON.parse(fs.readFileSync("./src/data/books.json"));

    const filteredBooks = books.filter( book => book.id == id);

    if (filteredBooks.length === 0) {
        return {};
    }

    let result = filteredBooks[0];

    result.src = "http://localhost:8000/" + result.src;

    return result;
}

function addBook(book) {
    const books = JSON.parse(fs.readFileSync("./src/data/books.json"));

    const newBooksList = [...books, book];

    fs.writeFileSync('./src/data/books.json', JSON.stringify(newBooksList));
}

function changeBook(changed, id) {
    if (id === undefined) {
        return [];
    }

    let books = JSON.parse(fs.readFileSync("./src/data/books.json"));

    const index = books.findIndex( book => book.id == id);

    const newChangedBook = {...books[index], ...changed};

    books[index] = newChangedBook;

    fs.writeFileSync('./src/data/books.json', JSON.stringify(books));
}

function deleteBook(id) {
    if (id === undefined) {
        return [];
    }

    let books = JSON.parse(fs.readFileSync("./src/data/books.json"));

    const index = books.findIndex( book => book.id == id);

    books.splice(index, 1);

    fs.writeFileSync('./src/data/books.json', JSON.stringify(books));
}

module.exports = { getList, getById, addBook, changeBook, deleteBook }
