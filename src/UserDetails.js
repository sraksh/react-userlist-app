import React, { Component } from 'react';
import axios from 'axios'

class UserDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.getUserDetails(this.props.val)
  }

  componentDidUpdate(prevProps) {
    if (this.props.val !== prevProps.val) {
      this.getUserDetails(this.props.val)
    }
  }

  getUserDetails(id) {
    axios.get('data/customer' + id + '.json').then(response => {
      this.setState({userDetails: response})
    })
  };

  render() {
    if (!this.state.userDetails)
      return (<p>Loading Data</p>)
    return (<div className="userdetails">
      <div className="centeralign">
        <div>
          <h3>{this.state.userDetails.data.name}</h3>
        </div>
        <div>
          <p>Name : {this.state.userDetails.data.name}</p>
          <p>Email : {this.state.userDetails.data.email}</p>
          <p>Phone : {this.state.userDetails.data.phone}</p>
          <p>City : {this.state.userDetails.data.city}</p>
          <p>State : {this.state.userDetails.data.state}</p>
          <p>Country : {this.state.userDetails.data.country}</p>
          <p>Organization : {this.state.userDetails.data.organization}</p>
          <p>Job Profile : {this.state.userDetails.data.jobProfile}</p>
          <p>Additional Info : {this.state.userDetails.data.additionalInfo}</p>
        </div>
      </div>
    </div>)
  }
}
export default UserDetails;
