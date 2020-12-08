//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_login:'',
      the_user:[],
      users:[]
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({input_login: event.target.value});
    const u = this.state.users.filter((user) =>{
      return user.login.indexOf(this.state.input_login)!==-1})
      if(u.length===1){
        this.setState({the_user: u})

      }
  }
  componentDidMount() {
    const url = `http://localhost:8000/users/`
    fetch(url)
    .then(response=>response.json())
      .then(data=>{
     
        this.setState({users:[...this.state.users,...data]})
   
    })
      return this.state
  }
 
  render() {

  return (
  <div>
    <form>
        <label>
          Login :
          <input type="text" defaultValue={this.state.input_login} onChange={this.handleChange} />
        </label>
      {Object.keys(this.state.the_user).map((key)=>{
        return (<table><tbody><tr><td> Login : {this.state.the_user[key].login}</td></tr>
        <tr><td>ID : {this.state.the_user[key].id}</td></tr> 
        <tr><td>Node ID : {this.state.the_user[key].node_id}</td></tr> 
        <tr><td> Avatar URL : {this.state.the_user[key].avatar_url}</td></tr> 
        <tr><td> GRavatar ID : {this.state.the_user[key].gravatar_id}</td></tr> 
        <tr><td> URL : {this.state.the_user[key].url}</td></tr> 
        <tr><td>HTML URL : {this.state.the_user[key].html_url}</td></tr> 
        <tr><td> Followers URL : {this.state.the_user[key].followers_url}</td></tr> 
        <tr><td> Following URL : {this.state.the_user[key].following_url}</td></tr> 
        <tr><td> Gists URL : {this.state.the_user[key].gists_url}</td></tr> 
        <tr><td> Starred URL : {this.state.the_user[key].starred_url}</td></tr> 
        <tr><td>Subscriptions URL : {this.state.the_user[key].subscriptions_url}</td></tr> 
        <tr><td>Organizations URL : {this.state.the_user[key].organizations_url}</td></tr> 
        <tr><td>Repos URL : {this.state.the_user[key].repos_url}</td></tr> 
        <tr><td>Events URL : {this.state.the_user[key].events_url}</td></tr> 
        <tr><td>Received events URL : {this.state.the_user[key].received_events_url}</td></tr> 
        <tr><td>Type : {this.state.the_user[key].type}</td></tr> 
        <tr><td>Site admin : {this.state.the_user[key].site_admin}</td></tr> 
        </tbody>
        </table>
        )
      })}
   </form>
  </div>
  )
    }  
}


export default App;
