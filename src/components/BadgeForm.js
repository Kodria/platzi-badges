import React from "react"

class BadgeForm extends React.Component {

  state = {};

  handleClick = e => {
    console.log('button has click')
  }

  render() {
    return (
      <React.Fragment>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input onChange={this.props.onChange} type="text" className="form-control" name="firstName" value={this.props.formValues.firstName}/>
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input onChange={this.props.onChange} type="text" className="form-control" name="lastName" value={this.props.formValues.lastName}/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input onChange={this.props.onChange} type="text" className="form-control" name="email" value={this.props.formValues.email}/>
          </div>

          <div className="form-group">
            <label>Job title</label>
            <input onChange={this.props.onChange} type="text" className="form-control" name="jobTitle" value={this.props.formValues.jobTitle}/>
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input onChange={this.props.onChange} type="text" className="form-control" name="twitter" value={this.props.formValues.twitter}/>
          </div>

          <button 
            onClick={this.handleClick} 
            className="btn btn-primary"
          >Save</button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </React.Fragment>
    )
  }
}

export default BadgeForm