import { Score } from "./Score";
export function GameTop(props) {
  const { score, history, setScore, restartGame } = props;
  const howToPlay = () => {
    const starPlaying = document.querySelector(".gameDown");
    setTimeout(() => (starPlaying.style.background = "#f3d774"), 100);
    setTimeout(() => (starPlaying.style.background = "transparent"), 1000);
  };
  return (
    <>
      <div className="gameTop">
        <h1>2048</h1>
        <Score score={score} history={history} setScore={setScore} />
        <button className="restartGame" onClick={restartGame}>
          New Game
        </button>
        <p className="topText">
          Join the tiles, get to <strong>2048!</strong>{" "}
          <strong
            onClick={howToPlay}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            How to play →
          </strong>
        </p>
      </div>
    </>
  );
}