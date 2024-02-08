import { Link } from "react-router-dom";
import Navbar from "./Navigation/Navbar";

function Header() {
  return (
    <section>
      <Navbar />
      <h1 className="main-header">NC NEWS</h1>
    </section>
  );
}

export default Header;
