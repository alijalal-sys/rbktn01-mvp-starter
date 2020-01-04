import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
const axios = require('axios')

const main = {
  textAlign: 'center',
  padding: '10px',
  fontFamily:'Trebuchet MS'
}

const input = {
  width: '30%',
  border: '2px solid #aaa',
  borderRadius: '4px',
  margin: '12px 0',
  outline: 'none',
  padding: '8px',
  boxSizing: 'border-box',
  transition: '0.3s'
}

const button = {
  backgroundColor: '#4CAF50', /* Green */
  borderRadius: '8px',
  borderColor: 'transparent',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin:' 4px 2px',
  cursor: 'pointer',
  padding: '8px 28px'
}

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false
    }
  }

  renderRedirect () {
    if (this.state.redirect) {
      return <Redirect to='/signin' />
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  redirectToSignIn() {
    return <Redirect to="/signin"/>
  }

  handleSubmit() {
    if (!this.state.username || !this.state.password) {
      alert('hhh')
    }
    const data = this.state
    axios.post('/signup', data)
      .then(result => {
        if (result.data.user) {
          return;
        }
        this.setState({
          redirect: true
        })
      })
      .catch(err => {
        console.log('something happened')
      })
  }


  render() {
    return (
      <div style={main}>
        <h2>Welcome to Signup Page</h2>
        Username: <br />
        <input
        style={input}
        type="text"
        name="username"
        value={this.state.username}
        onChange={(e) => {this.onChange(e)}}/>
        <br />

        Password: <br />
        <input
        style={input}
        type="password"
        name="password"
        value={this.state.password}
        onChange={(e) => {this.onChange(e)}}/>
        <br />

        <input style={button} type="submit" onClick={this.handleSubmit.bind(this)}/>
        {this.renderRedirect()}
      </div>
    )
  }
}

export default Signup;