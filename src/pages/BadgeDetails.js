import React from "react"

import { Link } from "react-router-dom"
import confLogo from "../images/platziconf-logo.svg"
import "./styles/BadgeDetails.css"

import Badge from "../components/Badge"
import DeleteBadgeModal from "../components/DeleteBadgeModal"

function BadgeDetails (props) {
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{props.badge.firstName} {props.badge.lastName}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge 
              firstName={props.badge.firstName} 
              lastName={props.badge.lastName} 
              email={props.badge.email} 
              twitter={props.badge.twitter} 
              jobTitle={props.badge.jobTitle}
            ></Badge>
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link to={`/badges/${props.badge.id}/edit`} className="btn btn-primary mb-4">
                  Edit
                </Link>
              </div>  
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal 
                  isOpen={props.modalIsOpen} 
                  onClose={props.onCloseModal} 
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeDetails