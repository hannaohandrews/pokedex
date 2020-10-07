import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar.jsx";
import Button from '@material-ui/core/Button';

import "./App.css";
import "fontsource-roboto";


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
      <NavBar />
     
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange} placeholder="Pokemon" />
        </label>
      </form>
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
      SEARCH
      </Button>

      {pokemonData.map((data) => {
        return (
          <div className="container">
            <div className="main_image">
              <img src={data.sprites["front_default"]} />
            </div>

            <div className="basicInfo">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Name</div>
                  <div className="divTable">{data.name}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTable">
                    {""}
                    {Math.round(data.height)} inches
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
                  <div className="divTable">
                    {data.abilities[0].ability.name},{" "}
                    {data.abilities[1].ability.name}
                  </div>
                </div>
              </div>
            </div>

            <div className="Base_Stats">
              <div className="divTableRow">
                <div className="divTableCell">hp</div>
                <div className="divTable">{data.stats[0].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"> attack</div>
                <div className="divTable">{data.stats[1].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">defense</div>
                <div className="divTable">{data.stats[2].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">special-attack</div>
                <div className="divTable">{data.stats[3].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">defense</div>
                <div className="divTable">{data.stats[4].base_stat}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">speed</div>
                <div className="divTable">{data.stats[5].base_stat}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
