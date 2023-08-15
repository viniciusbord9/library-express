const { getList, getById, addBook, changeBook, deleteBook } = require("../service/books");

function list(req, res) {
    try {
        const books = getList();
        res.send(books)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function get(req, res) {
    try {
        const id = req.params.id;
        const books = getById(id);
        res.send(books)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function add(req, res) {
    try {
        const newBook = req.body;
        const book = addBook(newBook);
        res.send(book)
        res.status(201);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function edit(req, res) {
    try {
        const changed = req.body;
        const id = req.params.id;
        const book = changeBook(changed, id);
        res.send(book)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function remove(req, res) {
    try {
        const id = req.params.id;
        deleteBook(id);
        res.send(id)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = { list, get, add, edit, remove };