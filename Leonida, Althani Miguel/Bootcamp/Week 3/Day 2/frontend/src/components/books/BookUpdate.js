import { useEffect, useState } from "react";

const BookUpdate = () => {

  const [bookId, setBookId] = useState("");

  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    pages: "",
    price: "",
  });


  useEffect(() => {
    if (bookId) {
      const fetchBookDetails = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/api/books/${bookId}`
          );
          if (response.ok) {
            const bookData = await response.json();
            setBookDetails(bookData);
          } else {
            console.error("Error fetching book details");
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchBookDetails();
    }
  }, [bookId]);


  const handleIdChange = (e) => {
    setBookId(e.target.value);
  };


  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((currentDetails) => ({ ...currentDetails, [name]: value }));
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/books/${bookId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookDetails),
        }
      );

      if (response.ok) {
        console.log(await response.json());
        setBookId("");
        setBookDetails({
          title: "",
          author: "",
          pages: "",
          price: "",
        });
      } else {
        throw new Error("Error editing book");
      }
    } 
    catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div>
      <h2>Edit Book Details</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Book ID:
          <input
            type="text"
            value={bookId}
            onChange={handleIdChange}
            placeholder="Enter Book ID"
          />
        </label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Title of the Book"
          value={bookDetails.title}
          onChange={handleDetailsChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author of the Book"
          value={bookDetails.author}
          onChange={handleDetailsChange}
        />
        <input
          type="number"
          name="pages"
          placeholder="Total Page Number"
          value={bookDetails.pages}
          onChange={handleDetailsChange}
        />
        <input
          type="number"
          name="price"
          placeholder="0.00"
          value={bookDetails.price}
          onChange={handleDetailsChange}
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};
export default BookUpdate;