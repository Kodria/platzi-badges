import React from "react"
import { Link } from "react-router-dom"

import "./styles/Badges.css"
import confLogo from "../images/badge-header.svg"
import BadgesList from "../components/BadgesList"

class Badges extends React.Component {

  state = {
    data: [
      {
        id: 1,
        firstName: "Demo",
        lastName: "Uno",
        avatarUrl: "https://es.gravatar.com/avatar?d=identicon",
        jobTitle: "Job one",
        twitter: "one",
        email: "demouno@demo.com",
      },
      {
        id: 2,
        firstName: "Demo",
        lastName: "Dos",
        avatarUrl: "https://es.gravatar.com/avatar?d=identicon",
        jobTitle: "Job two",
        twitter: "two",
        email: "demodos@demo.com",
      },
      {
        id: 3,
        firstName: "Demo",
        lastName: "Tres",
        avatarUrl: "https://es.gravatar.com/avatar?d=identicon",
        jobTitle: "Job three",
        twitter: "three",
        email: "demotres@demo.com",
      }
    ]
  }
  render() {
    return (
      <React.Fragment>

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img 
                className="Badges__conf-logo" 
                src={confLogo} 
                alt="Conf logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badges
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges