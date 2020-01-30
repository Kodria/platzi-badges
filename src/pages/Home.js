import React from "react"

import { Link } from "react-router-dom"

import platziConf from "../images/platziconf-logo.svg"
import astronautsImage from '../images/astronauts.svg';

import "./styles/Home.css"

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img 
                src={platziConf} 
                alt="PlatziConfLogo" 
                className="img-fluid mb-2"
              />
              <h1>Badge Management System</h1>
              <Link to="/badges" className="btn btn-primary">
                Start now
              </Link>
            </div>
            <div className="Home__col d-none d-md-block col-md-8">
              <img 
                src={astronautsImage} 
                alt="Astronauts" 
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home