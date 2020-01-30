import React from "react"

class BadgeForm extends React.Component {

  state = {};

  // handleChange = e => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value
  //   // })

  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  handleClick = e => {
    console.log('button has click')
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('form was submit')
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <h1>New attendant</h1>

        <form onSubmit={this.handleSubmit}>
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
        </form>
      </div>
    )
  }
}

export default BadgeForm