//importing hooks
import { useEffect, useState } from "react";

const BookList = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("api/books")
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.books);
                console.log(data);               
            })
            .catch((error) => console.error(error));
    }, [])

    return (
        <div>
            <h1> Book List </h1>
            <ul>
                {console.log(books)}
                {books && books.map((book) => (
                    <li key={book._id}>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                        <p>{book.genres}</p>
                        <p>{book.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;