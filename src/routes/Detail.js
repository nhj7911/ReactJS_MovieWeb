import { useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";

function Detail() {
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json(); // await를 await로 감싸기
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
