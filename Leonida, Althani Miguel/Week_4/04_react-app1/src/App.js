
import { useState, useEffect } from "react";
import searchIcon from "./search.svg";
import './App.css';
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=c032e2d7";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (response.ok) {
      setMovies(data.Search);
    }

  }

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="app">

      <h1> CinemaSearch </h1>
      <div className='search'>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Search for movies or series'
          value={searchTerm}
          onChange={(event) => {setSearchTerm(event.target.value)}}
        />
        <img
          src={searchIcon}
          alt='Magnifying glass for search'
          onClick={() => { 
            searchMovies(searchTerm)
          }} />
      </div>

      {
        movies !== undefined ? (

          <div className="container">
            {
              movies.map((movie) => (
                <MovieCard key={movie.imdbID} movieDetails={movie}/>
              ))
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }


    </div>
  );
}

export default App;
