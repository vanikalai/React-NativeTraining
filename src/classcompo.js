import React, { Component } from "react";
import axios from 'axios';

class ClassComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        persons: []
      };
    }
    componentDidMount() {
     this.getUsers();
     //this.fetchUsers();
    }

getUsers(){
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(res => {
    const persons = res.data;
    this.setState({ persons });
  })
}
    fetchUsers() {
      // Where we're fetching data from
      fetch(`https://jsonplaceholder.typicode.com/users`)
        // We get the API response and receive data in JSON format...
        .then(response => response.json())
        // ...then we update the users state
        .then(data =>
          this.setState({
            persons: data,
            
          })
        )
        // Catch any errors we hit and update the app
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    render() {
      return (
        <div>
            <p>count: {this.state.count} times</p>
          <button style = {{background:'red'}} onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click
          </button>
          <ul>
          { this.state.persons.map(person => <li>{person.username}</li>)}
        </ul>
        </div>
      );
    }
   }
export default ClassComponent;