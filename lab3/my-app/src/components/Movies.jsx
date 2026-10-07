import MovieItem from "./MovieItem";

// Movies takes 'myMovies' as props from Read component
export default function Movies(props) {
    // Map through the myMovies array and render a MovieItem for each item
    return props.myMovies.map((movie) => (
        <MovieItem myMovie={movie} key={movie.imdbID} />
    ));
}