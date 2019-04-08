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
    return (<div className="addmargin">
      <div className="col-md-3">
        {
          this.state.userList.data.map(user => <div key={user.name} className="centeralign">
            <h3>{user.name}</h3>
            <div>
              <p>{user.email}</p>
              <button onClick={() => this.setState({selectedUser: user.id})}>
                Click for user Details
              </button>
            </div>
          </div>)
        }
      </div>
      <div className="col-md-6">
        <UserDetails val={this.state.selectedUser}/>
      </div>
    </div>)
  }
}

export default UserList;
