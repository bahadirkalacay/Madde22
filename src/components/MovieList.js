import "./MovieList.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className="movie">
          <ul className="list list-group">
            <li className="list-group-item">
              {movie.Title} {movie.Year}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default MovieList;
