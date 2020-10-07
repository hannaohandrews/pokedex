import React, { Component } from "react";
import ImgComp from "./ImgComp";
import i1 from "../images/1.png";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div className="images">
            <div className ='image1'>
              <ImgComp src={i1} />
            </div>
          </div>
        </nav>Í
      </div>
    );
  }
}
