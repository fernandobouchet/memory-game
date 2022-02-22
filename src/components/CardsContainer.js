import { useEffect, useState } from "react";
import "./styles/CardsContainer.css";
import "./Utils";
import Cards from "./Cards";
import Buttons from "./Buttons";
import { MixPokemons } from "./Utils";
import Scores from "./Scores";

function CardsContainer() {
  const [pokemons, setPokemons] = useState([]);

  const [score, setScore] = useState(0);

  const [maxScore, setMaxScore] = useState(0);

  const [gameState, setGameState] = useState(false);

  const [selectedPokemons, setSelecetPokemons] = useState([]);

  useEffect(() => getPokemonsNumbers(), []);

  useEffect(() => {
    if (score > maxScore) {
      setMaxScore(score);
    }
  }, [score]);

  async function getPokemonsNumbers() {
    const pokemonsArray = [];
    for (let i = 1; i < 13; i++) {
      const result = await getPokemons(i);
      pokemonsArray.push(result);
    }
    const pokemons = MixPokemons(pokemonsArray);
    setPokemons(pokemons);
  }

  async function getPokemons(number) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function updateScore(pokemonName) {
    if (!selectedPokemons.includes(pokemonName)) {
      setSelecetPokemons([...selectedPokemons, pokemonName]);
      setScore((prevScore) => prevScore + 1);
    } else {
      setGameState(true);
    }
  }

  const cards = pokemons.map((pokemon) => {
    return (
      <Cards
        img={pokemon.sprites.front_default}
        name={pokemon.name}
        key={pokemon.id}
        shuffle={() => setPokemons([...MixPokemons(pokemons)])}
        changeScore={updateScore}
      />
    );
  });

  function result() {
    if (gameState) {
      return <h2 className="result">You Loose!</h2>;
    } else {
      return <h2 className="result">You Win!</h2>;
    }
  }

  function restart() {
    setGameState(false);
    setScore(0);
    setPokemons([]);
    setSelecetPokemons([]);
    getPokemonsNumbers();
  }

  return (
    <>
      <Scores score={score} maxScore={maxScore} />
      {score < 12 && !gameState ? (
        <div className="cards-container">{cards}</div>
      ) : (
        <>
          <div className="result-container">{result()}</div>
          <Buttons restart={() => restart()} />
        </>
      )}
    </>
  );
}

export default CardsContainer;
