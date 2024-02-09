import { useState } from "react";
import { patchVotes } from "../api";

export default function Votes({ votes, article_id }) {
  const [localVotes, setLocalVotes] = useState(0);
  const [stateError, setStateError] = useState(false);

  const handleLike = () => {
    setLocalVotes((currentVotes) => currentVotes + 1);
    setStateError(false);
    patchVotes(article_id, 1).catch((err) => {
      setStateError(true);
      setLocalVotes((currentVotes) => currentVotes - 1);
    });
  };

  const handleDislike = () => {
    setLocalVotes((currentVotes) => currentVotes - 1);
    setStateError(false);
    patchVotes(article_id, -1).catch((err) => {
      setStateError(true);
      setLocalVotes((currentVotes) => currentVotes + 1);
    });
  };

  return (
    <section>
      <button onClick={handleLike} disabled={localVotes === 1}>
        👍
      </button>
      <p>{votes + localVotes}</p>
      {stateError ? (
        <p>
          Oops! Looks like voting isn't working right now. Please try again
          later.{" "}
        </p>
      ) : null}
      <button onClick={handleDislike} disabled={localVotes === -1}>
        👎
      </button>
    </section>
  );
}
