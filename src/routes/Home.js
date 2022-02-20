import { useState, useEffect } from "react";
import MovieDetail from "../render/MovieDetail";
import React from "react";
import Load from "../components/Load";
import { Group_obj, Group_key_arr } from "../NavList";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";

function Home() {
  return (
    <div>
      {Group_key_arr.map((group) => {
        return (
          <div key={group}>
            <div>
              <div>
                <Link to={`/page/${Group_obj[group]}/1`}>{group}</Link>
              </div>
            </div>
            <Slide
              ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${Group_obj[group]}&sort_by=rating`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
