import { useEffect, useState } from "react";
import "./styles/CardsContainer.css";
import "./Utils";
import Cards from "./Cards";
import { MixPokemons } from "./Utils";

function CardsContainer() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => getPokemonsNumbers(), []);

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

  const cards = pokemons.map((pokemon) => {
    return (
      <Cards
        img={pokemon.sprites.front_default}
        name={pokemon.name}
        key={pokemon.id}
        shuffle={() => setPokemons([...MixPokemons(pokemons)])}
      />
    );
  });

  return (
    <>
      <div className="cards-container">{cards}</div>
    </>
  );
}

export default CardsContainer;
