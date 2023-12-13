//imports
const router = require("express").Router();
const {
    addBook, 
    getAllBooks, 
    getBookById,
    updateBook,
    deleteBook
    } = require("../controllers/book_controller");

const {authMiddleware} = require("../middleware/auth_model");


//route for creating a new book
router.post("/", addBook); 

//route for reading all books
router.get("/", getAllBooks); 

//route for reading a book
router.get("/:id", getBookById);

//route for updating a book
router.patch("/:id", updateBook);

//route for deleteing a book
router.delete("/:id", deleteBook);


module.exports = router;