import React from "react"
import "./styles/BadgesList.css"

import { Link } from "react-router-dom"
import Gravatar from "./Gravatar"

function useSearchBadges(badges) {
  const [ query, setQuery ] = React.useState('');
  const [ filteredBadges, setFilteredBadges ] = React.useState(badges)
  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })

    setFilteredBadges(result)
  }, [badges, query])

  return { setQuery, filteredBadges, query}
}

function BadgesList(props){

  const { setQuery, filteredBadges, query } = useSearchBadges(props.badges)
  
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter badges</label>
          <input 
            type="text" 
            name="" 
            id="" 
            className="form-control" 
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
          />
        </div>
        <h3>Not badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create new badge
        </Link>
      </div>
    )
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter badges</label>
        <input 
          type="text" 
          name="" 
          id="" 
          className="form-control" 
          value={query}
          onChange={(e) => {setQuery(e.target.value)}}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
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

export default BadgesList