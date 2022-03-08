import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../NavList";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState(null);
  // Event when u touch the search bar
  const searchClick = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.container}>
      {/* Home */}
      <div className={styles.pageName}>
        <Link to={"/"}>Home</Link>
      </div>

      {/* category link */}
      <div className={styles.GroupLink}>
        {Group_key_arr.map((key) => {
          return (
            <div className={styles.Link}>
              <div className={styles.Link_sep}>
                <Link to={`/page/${Group_obj[key]}/1`}>{key}</Link>
              </div>
            </div>
          );
        })}
        {/* merry christmas! */}
        <div className={styles.MerryChristMas}>
          <Link to={"/serach/christmas"}>Christmas🎄</Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <form>
          {/* Search Text */}
          <input
            type="text"
            placeholder="Search Movie!"
            value={search}
            onChange={searchClick}
            // onMouseOut={() => {
            //   setSearch("");
            // }}
          ></input>
          {/* Search Button */}
          <Link to={`/search/${search}`}>
            <button>
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Navbar;
