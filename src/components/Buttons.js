import "./styles/Buttons.css";

function Buttons(props) {
  return (
    <div className="button-container">
      <button className="button" onClick={props.restart}>
        Restart Game
      </button>
    </div>
  );
}

export default Buttons;
