import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
const axios = require('axios')

const btn = {
  backgroundColor: 'red',
  fontWeight: 'bold',
  fontSize: '15pt',
  color: 'black',
  borderColor: 'transparent',
  textAlign: 'right'
}

const main = {
  textAlign: 'center',
  borderRadius: '1.2rem',
  padding: '10px',
  fontFamily:'Trebuchet MS'
}

const tableTdTh = {
  border: '1px',
  borderColor: '#ddd',
  borderStyle: 'solid',
  textAlign: 'left',
  padding: '10px',
  fontFamily:'Trebuchet MS'
}

const table = {
  borderCollapse: 'collapse',
  width: '100%'
}

const td = {
  padding: '15px'
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      redirect: false,
    }
  }

  componentDidMount() {
    axios.get('/blog')
      .then(result => {
        this.setState({
          people: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  renderRedirect () {
    if (this.state.redirect) {
      return <Redirect to='/signin' />
    }
  }

  changeRedirect() {
    this.setState({
      redirect: true
    })
  }


  render() {
    console.log(this.state.value)
    return (
      <div style={main}>
          <button style={btn} onClick={this.changeRedirect.bind(this)}>Signout</button>
          {this.renderRedirect()}
          <h3>Enjoy Writing Your blog</h3>

          <form action="/blog" method="post">
            <textarea cols="80" rows ="10" name="value"></textarea> <br />
            <input type="submit" />
          </form>

          <h4>Blogs: </h4>
          {this.state.people.map(blog => {
            return (
              <div style={main}>
                {blog.text}
              </div>
            )
          })}

      </div>
    )
  }
}

export default Header;