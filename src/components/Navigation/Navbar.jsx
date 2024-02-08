import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-item">
          {" "}
          <Link to={"/"}>
            <button>Home</button>
          </Link>
        </li>

        <li className="navbar-item">
          {" "}
          <Link to={"/users"}>
            <button>Users</button>
          </Link>
        </li>

        <li className="navbar-item">
          <img src="" alt="" />
          👤
        </li>
      </ul>
    </nav>
  );
}
