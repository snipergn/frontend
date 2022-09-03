import './App.css';
import SignIn from './Components/Signin/signin.js'
import Register from './Components/Register/register.js'
import Navigation from './Components/Navigation/navigation.js'
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

class App extends React.Component {
  
  render() {
  return (
    <div className="App"> 
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SignIn/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/navigation" element={<Navigation/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
  }

}

export default App;
