import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { githubapi } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import M from "materialize-css";
import "../css/card.css";
import img from "../image/loading.gif";
function User(props) {
  const dispatch = useDispatch();
  let { username } = useParams();
  let history = useHistory();
  const [user, setUser] = useState({});
  const state = useSelector((state) => state);

  useEffect(() => {
    let userhistory = { user: username, date: Date.now() };

    dispatch({ type: "HISTORY", value: userhistory });
    dispatch({ type: "LOADSTART" });

    fetch(githubapi + username)
      .then((res) => {
        dispatch({ type: "LOADSTART" });
        return res.json();
      })
      .then((result) => {
        if (result.message === "Not Found") {
          M.toast({ html: "user Not Found!", classes: "#d32f2f red darken-2" });
          dispatch({ type: "BACK" });
          history.replace("/");
        } else {
          setUser(result);
          dispatch({ type: "LOADEND" });
        }
      });
  }, [username, history, dispatch]);

  return (
    <>
      {/* <img src={img} alt="img" /> */}
      {state.loading ? (
        <img src={img} alt="img" />
      ) : (
        <div className="container">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-action">
                <span>
                  <strong>{user.login}</strong>
                </span>
              </div>
              <div
                className="card-image"
                style={{ width: "40%", height: "40%", margin: "auto" }}
              >
                <img src={user.avatar_url} alt="img not found" />
              </div>
              <div className="card-content">
                <div>
                  <span>{user.location}</span>
                </div>
                <span>
                  <strong>Followers</strong> {user.followers}
                </span>
                <span style={{ marginLeft: "20px" }}>
                  <strong>Followings</strong> {user.following}
                </span>
              </div>

              <div className="card-action">
                <strong> Email:</strong>
                {user.email}
              </div>
              <div className="card-action">
                <strong>{user.public_repos} Repos</strong>
                <strong>
                  {" "}
                  <Link to={"/repo/" + user.login}>View All</Link>{" "}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default User;
