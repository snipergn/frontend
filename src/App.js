import './App.css';
import SignIn from './Components/Signin/signin.js'
import Register from './Components/Register/register.js'
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      phone: ''
    }

  this.handleChangeEmail = this.handleChangeEmail.bind(this);
  this.handleChangePassword  = this.handleChangePassword.bind(this);
  this.handleChangePhone  = this.handleChangePhone.bind(this);
  this.handleChangeName  = this.handleChangeName.bind(this);
  this.handleChangeElements  = this.handleChangeElements.bind(this);
}

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

handleChangePhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  handleChangeElements = () => {
    this.preventDefault()
    alert('it\'s work');   
  };
 

  render() {
  return (
    <div className="App"> 
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SignIn/>}/>
            <Route exact path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
  }

}

export default App;
