function Cards(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
    </div>
  );
}

export default Cards;
