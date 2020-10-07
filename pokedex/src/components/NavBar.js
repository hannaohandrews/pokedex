import React, { Component } from "react";
import ImgComp from './ImgComp'
import i1 from "../images/1.png";
import i2 from "../images/2.png";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <ImgComp src={i1} />
          <ImgComp src={i2} />
          <a href="" className="Pokedex">
            Pokedex
          </a>
        </nav>
      </div>
    );
  }
}
