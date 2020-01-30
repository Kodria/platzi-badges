import React from "react"

import header from "../images/badge-header.svg"
import Navbar from "../components/Navbar"

import "../components/styles/BadgeNew.css"
import Badge from "../components/Badge"

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>
        <div className="container" >
          <div className="row">
            <div className="col">
            <Badge 
              firstName="Nicolass" 
              lastName="Guerrero" 
              avatarUrl="https://es.gravatar.com/avatar?d=identicon"
              jobTitle="Desarrollador web sr" 
              twitter="nicolasguerrero"
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew