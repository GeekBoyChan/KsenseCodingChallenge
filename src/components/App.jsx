import React from 'react';
import $ from 'jquery';
import UserTable from './UserTable.jsx';
import PostTable from './PostTable.jsx';

import '../codingChallenge.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: undefined,
      selectedUsersPosts: undefined,
    };
    this.selectedUserHandler = this.selectedUserHandler.bind(this);
  }

  selectedUserHandler(userID) {
    this.setState({ selectedUser: userID });
  }

  componentDidMount() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users/',
      dataType: 'json',
      cache: false,
      success: function (userData) {
        this.setState({ users: userData });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(
          'https://jsonplaceholder.typicode.com/users/',
          status,
          err.toString()
        );
      }.bind(this),
    });
  }

  componentDidUpdate(prevState) {
    const { selectedUser } = this.state;
    if (prevState.selectedUser !== selectedUser) {
      $.ajax({
        url: `https://jsonplaceholder.typicode.com/users/${selectedUser}/posts`,
        dataType: 'json',
        cache: false,
        success: function (postData) {
          this.setState({ selectedUsersPosts: postData });
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(
            `https://jsonplaceholder.typicode.com/users/${selectedUser}/posts`,
            status,
            err.toString()
          );
        }.bind(this),
      });
    }
  }

  render() {
    let { users, selectedUsersPosts } = this.state;
    return (
      <div id='AppContainer'>
        <h2 className='title'>Ksense Technology Group LLC Coding Challenge</h2>
        <h3 className='message'>Please select a user to see their posts</h3>
        <UserTable
          users={users}
          selectedUserHandler={this.selectedUserHandler}
        />
        <PostTable selectedUsersPosts={selectedUsersPosts} />
      </div>
    );
  }
}

export default App;
