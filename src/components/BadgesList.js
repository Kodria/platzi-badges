import React from "react"
import "./styles/BadgesList.css"

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <img src={badge.avatarUrl} alt="Avatar" className="BadgesListItem__avatar"/>
                <div>
                  <b>{badge.firstName} {badge.lastName}</b><br/>
                  @{badge.twitter}<br/>
                  {badge.jobTitle}<br/>
                </div>
                
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList