import React from "react"

import PageLoading from "../components/PageLoading"
import PageError from "../components/PageError"

import api from "../api"
import BadgeDetails from "./BadgeDetails"


class BadgeDetailContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: true
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})
   
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )

      this.setState({loading: false, data: data})
    } catch(err) {
      this.setState({loading: false, error: err})
    }
  }

  handleOpenModal() {
    this.setState({modalIsOpen: true})
  }

  handleCloseModal() {
    this.setState({modalIsOpen: false})
  }

  render() {

    if (this.state.loading === true) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return(
      <React.Fragment>
        <BadgeDetails 
          badge={this.state.data} 
          onCloseModal={this.handleCloseModal}
          onOpenModal={this.handleOpenModal}
          modalIsOpen={this.state.modalIsOpen}
        ></BadgeDetails>
      </React.Fragment>
    )
  }
}

export default BadgeDetailContainer