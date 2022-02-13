import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieDetail from "../render/MovieDetail";
import React from "react";
import Load from "../components/Load";

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Group() {
  const { group, page } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`
      )
    ).json(); // await를 await로 감싸기
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
    return;
  }, [group, page]);

  return (
    <div>
      {loading ? (
        <Load />
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieDetail
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
      {/* pagenaiton */}
      {loading ? null : (
        <div>
          <div>
            {List_arr.map((lst) => {
              return (
                <Link key={lst} to={`/page/${group}/${lst}`}>
                  {lst}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default Group;
