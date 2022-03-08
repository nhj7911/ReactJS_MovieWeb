import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieGroup from "../render/MovieGroup";
import React from "react";
import Load from "../components/Load";
import styles from "./Group.module.css";

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Group() {
  const { group, page } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // 그룹별 영화 가져옴
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
    <div className={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <MovieGroup
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              rating={movie.rating}
              runtime={movie.runtime}
              year={movie.year}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
      {/* pagenaiton */}
      {loading ? null : (
        <div className={styles.footer}>
          <div className={styles.list}>
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
