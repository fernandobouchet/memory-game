import "./styles/Cards.css";

function Cards(props) {
  return (
    <div className="card" onClick={props.shuffle}>
      <img src={props.img} alt="" className="pokemon-image" />
      <h2 className="pokemon-name">{props.name}</h2>
    </div>
  );
}

export default Cards;
