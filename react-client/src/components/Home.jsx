import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Header from './Header.jsx'

const main = {
  textAlign: 'center',
  padding: '10px',
  fontFamily:'Trebuchet MS'

}

const link = {
  textDecoration: 'none',
  borderColor: 'transparent',
  marginTop: '20px',
  padding: '10px',
  color: 'white',
  backgroundColor: 'rgb(0, 77, 177)'
}

class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
    <div style={main}>
      <h1>Welcome To my Dummy Blogger</h1>
      <br /> <br />
      <Link style={link} to="/signin">Click to Sign in</Link> <br />
      <br /> <br /> <br />
      <Link style={link} to="/signup">Click to Sign up</Link>
    </div>
    )
  }
}


export default Home;