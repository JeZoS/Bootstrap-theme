import React,{ Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

 function Navbar(){
    return(
      <><div id="home">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
            <a className="navbar-brand" href="#"><img className="us" src="us.png"></img>KUSTOMS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="#explore">Explore</a></li>
              <li className="nav-item"><a className="nav-link" href="#downloads">Downloads</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Upload</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
        </nav>           
      </div></>
    );
  }
export default Navbar