import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component"
import Landingpage from "./components/landingpage.component"
import Feature from "./components/feature.component"
import NewFeatures from "./components/newfeatures.component.js"
import Users from "./components/users.component.js"
import Build from "./components/build.component.js"
import Develop from "./components/develop.component.js"
import Contact from "./components/contact.component.js"
import Example from "./components/example.component.js"

function App() {
  return (
    <Router>
    <div>
      <div><Navbar className="Nav"/></div>
      <div><Landingpage className="Landingpage"/></div>
      <div><Feature className="Feature"/></div>
      <div><Example className="example" id="explore"/></div>
      <div><NewFeatures className="New"/></div>
      <div><Build className="build" /></div>
      <div><Users className="Users" id="about"/></div>
      <div><Develop className="develop"/></div>
      <div><Contact className="" id="contact"/></div>
    </div>
    </Router>
  );
}

export default App;
