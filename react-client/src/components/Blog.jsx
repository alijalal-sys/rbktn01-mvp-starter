import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
const axios = require('axios')

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  renderRedirect () {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }

  changeRedirect() {
    this.setState({
      redirect: true
    })
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

    )
  }
}

export default Blog;