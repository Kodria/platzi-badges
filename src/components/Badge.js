import React from "react"
import "./styles/Badge.css"
import confLogo from "../images/badge-header.svg"

class Badge extends React.Component {
  render() {
    return (<div>
      <div>
        <img src={confLogo} alt="Logo de la conferencia"/>
      </div>
      <div>
        <img src="https://es.gravatar.com/avatar?d=identicon" alt="Avatar"/>
        <h1>Nicolas <br />Guerreroo</h1>
      </div>
      <div>
        <p>Web senior</p>
        <p>@nicolasguerrero</p>
      </div>
      <div>
        #Example
      </div>
    </div>
    )
  }
}

export default Badge