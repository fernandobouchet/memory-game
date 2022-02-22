import "./styles/Scores.css";

function Scores(props) {
  return (
    <div className="scores-container">
      <h2 className="score">Score: {props.score}</h2>
      <h2 className="score">Max Score: {props.maxScore}</h2>
    </div>
  );
}

export default Scores;
