import { useState } from 'react'

const BookAdd = () => {

    const [bookDetails, setBookDetails] = useState(
        {
            title: "",
            author: "",
            pages: "",
            price: ""
        });


    //handles the new details of the book form when user wanted to add a book    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setBookDetails((currentDetails) => ({ ...currentDetails, [name]: value }));
    }


    //handles when user clicks the submit button
    const handleSubmit = async (e) => {

        //prevents website from refreshing
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/books/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookDetails)
            });

            if (response.ok) {
                console.log(await response.json())
                setBookDetails({
                    title: "",
                    author: "",
                    pages: "",
                    price: ""
                })
            }
            else {
                throw new Error("Error Adding Book");
            }
        }
        catch (error) {
            console.error(error);
        }

    }


    return (
        <div>
            <h1> Add Book </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title of the Book"
                    value={bookDetails.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author of the Book"
                    value={bookDetails.author}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="pages"
                    placeholder="Total Page Number"
                    value={bookDetails.pages}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="0.00"
                    value={bookDetails.price}
                    onChange={handleChange}
                />
                <button type='submit'> Submit </button>
            </form>
        </div>
    )
}

export default BookAdd;