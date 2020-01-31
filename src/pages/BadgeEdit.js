import React from "react"

import api from "../api"
import "./styles/BadgeEdit.css"
import header from "../images/platziconf-logo.svg"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import PageLoading from "../components/PageLoading"

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({loading: true, error: null})

    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({loading: false, form: data})
    } catch(err) {
      this.setState({loading: false, error: err})
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, 
        [e.target.name]: e.target.value
      }
    });
  }
  
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true, error: null})
    
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
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
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container" >
          <div className="row">
            <div className="col">
              <Badge 
                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                lastName={this.state.form.lastName || 'LAST_NAME'} 
                avatarUrl="https://es.gravatar.com/avatar?d=identicon"
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} 
                twitter={this.state.form.twitter || 'twitter'} 
                email={this.state.form.email || 'EMAIL'} 
              />
            </div>
            <div className="col">
              <h1>Edit attendant</h1>
              <BadgeForm 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
            />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeEdit