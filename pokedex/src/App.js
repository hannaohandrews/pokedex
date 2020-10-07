import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];

    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter name!"
          />
        </label>
      </form>
      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites["front_default"]} />
            <div className="divTable">
              <div className="divTableBody">
              <div className="divTableRow">
                  <div className="divTableCell">Name</div>
                  <div className="divTable">{data.name}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTable">
                    {""}
                    {Math.round(data.height)}"
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Weight</div>
                  <div className="divTable">
                    {""}
                    {Math.round(data.weight)} lb{" "}
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTable">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Number of Battle</div>
                  <div className="divTable">{data.game_indices.length}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Abilities</div>
                  <div className="divTable">{data.abilities[0].ability.name}, {data.abilities[1].ability.name}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Base Stats</div>
                  <div className="divTable">{data.base_experience}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
