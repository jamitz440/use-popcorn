import { Movie } from "./Movie";

export function WatchedMoviesList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
}
