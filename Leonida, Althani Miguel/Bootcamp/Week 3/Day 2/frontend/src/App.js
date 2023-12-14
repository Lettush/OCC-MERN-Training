import BookList from "./components/books/BookList";
import BookAdd from "./components/books/BookAdd";
import BookUpdate from "./components/books/BookUpdate";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookList />
        <BookAdd />
        <BookUpdate/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
