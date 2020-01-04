import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Signup from './components/Signup.jsx'
import Signin from './components/Signin.jsx'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render () {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/home" exact component={Header}/>
          <Route path="/signin" exact component={Signin}/>
          <Route path="/signup" exact component={Signup}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));