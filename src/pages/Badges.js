import React from "react"
import { Link } from "react-router-dom"

import "./styles/Badges.css"
import confLogo from "../images/badge-header.svg"
import BadgesList from "../components/BadgesList"
import PageLoading from "../components/PageLoading"
import PageError from "../components/PageError"
import MiniLoader from "../components/MiniLoader"

import api from "../api"

class Badges extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      error: null,
      data: undefined
    }
  }

  componentDidMount() {
    this.fetchData()

    this.interval = setInterval(this.fetchData, 5000)
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})

    try {
      const data = await api.badges.list();
      this.setState({loading: false, data: data})
    } catch(err) {
      this.setState({loading: false, error: err})
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {

    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    console.log('2/4. Render')
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

              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges