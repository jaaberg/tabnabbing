import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    if (window.opener && window.opener.location) {
      window.opener.location.assign('https://vg.no');
    }
  }

  render() {
    return (
      <div className="App">
        <form className="login" onsubmit="return false">
          <h1>Facebook</h1>
          <input type="email" name="email" className="login-input" placeholder="Email Address" autofocus/>
          <input type="password" name="password" className="login-input" placeholder="Password"/>
          <input type="submit" value="Login" className="login-submit"/>

          <p class="login-help"><a href="#">Forgot password?</a></p>
        </form>
      </div>
    );
  }
}

export default App;
