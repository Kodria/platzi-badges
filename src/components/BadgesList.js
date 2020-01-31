import React from "react"
import "./styles/BadgesList.css"

import { Link } from "react-router-dom"
import Gravatar from "./Gravatar"

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>Not badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                  <Gravatar className="BadgesListItem__avatar" email={badge.email} />
                  <div>
                    <b>{badge.firstName} {badge.lastName}</b><br/>
                    @{badge.twitter}<br/>
                    {badge.jobTitle}<br/>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList