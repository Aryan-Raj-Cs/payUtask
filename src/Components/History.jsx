import { useSelector } from "react-redux";
import { historySort } from "../utility/utility";
import { Link } from "react-router-dom";
import "../css/history.css";
function History() {
  const historyData = useSelector((state) => state.historyData);
  const data = [...historyData];
  historySort(data);

  return (
    <>
      <div style={{ marginLeft: "20%" }}>
        {data.map((value) => {
          return (
            <div key={value.user} className="card history">
              <div className="card-action">
                <Link style={{ color: "#6300EE" }} to={"/user/" + value.user}>
                  {value.user}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default History;
