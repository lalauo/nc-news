function Header() {
  return (
    <section>
      <h1>NC NEWS</h1>
      <div>
        <ul>
          <li className="topics">
            {" "}
            <button>Coding</button>
          </li>
          <li className="topics">
            {" "}
            <button>Football</button>
          </li>
          <li className="topics">
            {" "}
            <button>Cooking</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
