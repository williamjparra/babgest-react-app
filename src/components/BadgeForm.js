import React from 'react'

class BadgeForm extends React.Component {
  // handleChange = (e) => {
  //   //console.log({ name: e.target.name, value: e.target.value });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }

  handleClick = (e) => {
    console.log('button whas click');
  }

  

  state = {};

  render () {
    return(
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.props.onChange} type="text" name="firstName" className="form-control" value={this.props.formValues.firstName} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input onChange={this.props.onChange} type="text" name="lastName" className="form-control" value={this.props.formValues.lastName}/>
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input onChange={this.props.onChange} type="email" name="email" className="form-control" value={this.props.formValues.email}/>
          </div>

          <div className="form-group">
            <label>Job title</label>
            <input onChange={this.props.onChange} type="text" name="jobTitle" className="form-control" value={this.props.formValues.jobTitle}/>
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input onChange={this.props.onChange} type="text" name="twitter" className="form-control" value={this.props.formValues.twitter}/>
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>Save</button>

          {this.props.error && (
            <p className="text-danger"> {this.props.error.message} </p>
          )}
        </form>
      </div>
    )
  }
} 


export default BadgeForm