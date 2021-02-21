import React from "react";
import "../css/search.css";
import "../css/button.css";
import { useHistory } from "react-router-dom";
const Search = () => {
  const [user, setUser] = React.useState("");
  const [error, setError] = React.useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    if (user) {
      history.push("/user/" + user);
    } else {
      setError("please enter value");
    }

    e.preventDefault();
  };

  const handleUser = (e) => {
    setError("");
    setUser(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <div className="input-field inline">
          <input type="text" value={user} onChange={handleUser} />
          <label> Search User</label>
          <span
            class="helper-text"
            data-error="wrong"
            data-success="right"
            style={{ color: "red" }}
          >
            {error}
          </span>
        </div>

        <button className="btn  waves-light button" type="submit" name="action">
          Submit{" "}
        </button>
      </div>
    </form>
  );
};

export default Search;
