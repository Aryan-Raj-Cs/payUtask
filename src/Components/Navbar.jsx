import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "../css/Navbar.css";
function Navbar() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const historyData = state.historyData;
  const back = state.back;
  const history = useHistory();
  const gotohistory = () => {
    dispatch({ type: "TRUEBACK" });
    history.replace("/history");
  };

  const goback = () => {
    if (state.allRepo === true) {
      dispatch({ type: "FALSEALLREPO" });
      history.goBack();
    } else {
      dispatch({ type: "BACK" });
      history.replace("/");
    }
    // history.goBack();
  };

  return (
    <nav>
      <div className="nav-wrapper navstyle">
        <span className="brand logostyle">
          <Link to="/">GitHub</Link>
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {back && (
              <button
                onClick={goback}
                className="btn waves-light back"
                type="submit"
                name="action"
              >
                Back
              </button>
            )}
          </li>
          <li>
            <button
              disabled={historyData.length ? false : true}
              onClick={gotohistory}
              className="btn  waves-light"
              type="submit"
              name="action"
            >
              History
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
