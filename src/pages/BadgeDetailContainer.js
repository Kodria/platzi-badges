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
      modalIsOpen: false
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

  handleOpenModal = e => {
    this.setState({modalIsOpen: true})
  }

  handleCloseModal = e => {
    this.setState({modalIsOpen: false})
  }

  handleDeleteBadge = async e => {
    this.setState({loading: true, error: null})

    try {
      await api.badges.remove(
        this.props.match.params.badgeId
      );

      this.setState({loading: false})
      this.props.history.push('/badges')
    } catch (err) {
      this.setState({loading: false, error: err})
    }
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
          onDeleteBadge={this.handleDeleteBadge}
          modalIsOpen={this.state.modalIsOpen}
        ></BadgeDetails>
      </React.Fragment>
    )
  }
}

export default BadgeDetailContainer