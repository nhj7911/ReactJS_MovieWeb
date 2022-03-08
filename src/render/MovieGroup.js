import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./MovieGroup.module.css";

// 그룹별 영화 component
function MovieGroup({ id, coverImg, title, rating, runtime, year, summary }) {
  return (
    <div className={styles.movie}>
      <div className={styles.show}>
        {/* img */}
        <div className={styles.Img}>
          <img src={coverImg} alt={title} />
        </div>
        {/* content */}
        <div className={styles.letters}>
          {/* 제목 link to detail */}
          <div className={styles.title}>
            <h3>
              <Link to={`/movie/${id}`}>
                {title.length > 35 ? `${title.slice(0, 35)}...` : title}
              </Link>
            </h3>
          </div>
          <p>{year ? `year: ${year}` : null}</p>
          <p>{rating ? `rating: ${rating} / 10` : null}</p>
          <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
          <p>
            {summary
              ? summary.length > 180
                ? `${summary.slice(0, 180)}...`
                : summary
              : null}
          </p>
        </div>
      </div>
    </div>
  );
}

MovieGroup.prototypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  download_count: PropTypes.number,
  summary: PropTypes.string,
};

export default MovieGroup;
