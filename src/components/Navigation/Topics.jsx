import { Link } from "react-router-dom";

export default function Topics({ setTopic }) {
  return (
    <div>
      <ul>
        <li className="topics">
          {" "}
          <Link to="/?topic=coding">
            <button onClick={() => setTopic("coding")}>Coding</button>
          </Link>
        </li>
        <li className="topics">
          {" "}
          <Link to="/?topic=football">
            <button onClick={() => setTopic("football")}>Football</button>
          </Link>
        </li>
        <li className="topics">
          {" "}
          <Link to="/?topic=cooking">
            <button onClick={() => setTopic("cooking")}>Cooking</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
