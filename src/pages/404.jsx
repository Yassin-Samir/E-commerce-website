import { Link } from "react-router-dom";
import style from "../css/404.module.css";
function Error() {
  return (
    <div className={style.error}>
      Wrong URL <Link to="/">Back to main page</Link>
    </div>
  );
}
export default Error;
