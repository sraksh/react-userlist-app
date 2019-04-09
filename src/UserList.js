import React, { Component } from 'react';
import UserDetails from './UserDetails'
import axios from 'axios'

class UserList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      selectedUser: 1
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    axios.get('data/userList.json').then(response => {
      this.setState({userList: response})
    })
  };


  render() {
    if (!this.state.userList)
      return (<p>Loading data</p>)
    return (<div className="container addmargin">
      <div className="row">
        <div className="col-md-3">
          {
            this.state.userList.data.map(user => <div key={user.name} className="panel panel-info margintop">
              <div className="mt-1 panel-heading">{user.name}</div>
              <div className="panel-body">
                <p>{user.email}</p>
                <button className="btn btn-info" onClick={() => this.setState({selectedUser: user.id})}>
                  Click for user Details
                </button>
              </div>
            </div>)
          }
        </div>
        <div className="col-md-6">
          <UserDetails val={this.state.selectedUser}/>
        </div>
      </div>
    </div>)
  }
}

export default UserList;
