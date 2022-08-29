import './App.css';
import SignIn from './Signin/signin.js'
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
  }


  render() {
  return (
    <div className="App">
      <header className="App-header">
          <SignIn> </SignIn>
      </header>
    </div>
  );
}
}

export default App;
