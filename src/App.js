import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navigationbar';
import { MDBTypography } from 'mdb-react-ui-kit';
import hero from './images/image-hero-desktop.png'



const App = () => {
  return (
    <>
        <NavigationBar />

        <div className='heros'>
            <img id='hero'
                src={hero}
                className='img-thumbnail'
                alt='hero'
                style={{ maxWidth: '25rem' }}
              />
              </div>
        <MDBTypography variant='h1' className='text-header'>Make Remote <br></br>
            Work
        </MDBTypography>

        <MDBTypography className='lead mb-0'>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor<br></br>
             auctor Duis mollis, est non commodo luctus.
        </MDBTypography>
    </>
  );
}

export default App;
