import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../NavList";
import styles from "./Navbar.module.css";

function Navbar() {
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
    </div>
  );
}
export default Navbar;
