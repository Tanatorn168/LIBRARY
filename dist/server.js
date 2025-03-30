"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Sample data for books
const library = [
    {
        title: 'The Great Gatsby',
        author_name: 'F. Scott Fitzgerald',
        description: 'A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.',
        groups: ['Fiction', 'Classic'],
    },
    {
        title: 'To Kill a Mockingbird',
        author_name: 'Harper Lee',
        description: 'A story of racial injustice and moral growth in the American South.',
        groups: ['Fiction', 'Historical'],
    },
];
// Endpoint to get all books
app.get('/books', (req, res) => {
    res.json(library);
});
// Endpoint to get a single book by title
app.get('/books/:title', (req, res) => {
    const { title } = req.params;
    const book = library.find((b) => b.title.toLowerCase() === title.toLowerCase());
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).send({ message: 'Book not found' });
    }
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
