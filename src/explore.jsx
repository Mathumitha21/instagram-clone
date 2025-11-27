import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

 function Explore() {
  return (
    <div>
      <div className="w-20"><Sidebar/></div>
      <div className="d-flex justify-content-center">
        <h1 className="reels  d-flex justify-content-center m-5">Explore</h1>
      </div>
    </div>
  );
}
export default Explore;
