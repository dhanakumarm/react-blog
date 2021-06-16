import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DashboardNavbar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div>
      <ul className="right hide-on-med-and-down">
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={splitLocation[1] === "about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>

        <li className={splitLocation[1] === "users" ? "active" : ""}>
          <a href="/users">Contact</a>
        </li>
        <li className={splitLocation[1] === "login" ? "active" : ""}>
          <a href="/login">Login</a>
        </li>
      </ul>

      <ul id="nav-mobile" className="sidenav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/about">Contact</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavbar;
