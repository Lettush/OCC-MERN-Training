//importing hooks
import { useEffect, useState } from "react";

const BookList = () => {

    const [allBooks, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/books/")
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.allBooks);
                console.log(data); 
            })
            .catch((error) => console.error(error));
    }, [])

    return (
        <div>
            <h1> Book List </h1>
            <ul>
                {allBooks && allBooks.map((book) => (
                    <li key={book._id}>
                        <p>Title: {book.title}</p>
                        <p>Author: {book.author}</p>
                        <p>Pages: {book.pages}</p>
                        <p>Price: Php {book.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;