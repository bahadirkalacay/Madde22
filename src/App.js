import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e3dd41cd`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  
  return (
    <div className="App">
      <div className="searchbox">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {searchValue && (
        <div className="movies">
          <MovieList movies={movies} />
        </div>
      )}
    </div>
  );
}

export default App;
