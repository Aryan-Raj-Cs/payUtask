import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { githubapi } from "../constants/constants";
import M from "materialize-css";
import "../css/card.css";
import "../css/allrepo.css";
import { useSelector, useDispatch } from "react-redux";
import img from "../image/loading.gif";
function AllRepos(props) {
  let { username } = useParams();
  const [repo, setRepo] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(githubapi + username)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        dispatch({ type: "LOADSTART" });
        if (result.message === "Not Found") {
          M.toast({ html: "user Not Found!", classes: "#d32f2f red darken-2" });
        } else {
          fetch(result.repos_url)
            .then((res) => res.json())
            .then((repos) => {
              console.log(repos);
              setRepo(repos);
              dispatch({ type: "LOADEND" });
            });
        }
      });
  }, [username, dispatch]);

  return (
    <>
      <h4>All Repos</h4>
      {state.loading && <img src={img} alt="img" />}
      <div className="repo-parent">
        {repo.map((value) => {
          return (
            <div className="card card-style" key={value.id}>
              <div className="card-action">
                <h6 className="name">{value.name}</h6>
              </div>
              <div className="card-content">
                <div className="card-content-children">
                  <div className="counter">
                    {value.forks_count}
                    <span className="counter-children">Fork Count</span>
                  </div>
                  <div className="counter">
                    {value.watchers_count}
                    <span className="counter-children">Watcher's Count</span>
                  </div>
                  <div className="counter">
                    {value.stargazers_count}
                    <span className="counter-children">Star Count</span>
                  </div>
                </div>
                <div className="date">
                  <div className="date-children">
                    <b>Created At: </b>
                    <br></br>
                    {value.created_at.split("-")[2].substring(0, 2)}-
                    {value.created_at.split("-")[1]}-
                    {value.created_at.split("-")[0]}
                  </div>
                  <div className="date-children">
                    <b>Updated At: </b>
                    <br></br>
                    {value.updated_at.split("-")[2].substring(0, 2)}-
                    {value.updated_at.split("-")[1]}-
                    {value.updated_at.split("-")[0]}
                  </div>
                </div>
              </div>
              <div className="card-action">
                <a href={value.html_url} target="_blank" rel="noreferrer">
                  View
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default AllRepos;
