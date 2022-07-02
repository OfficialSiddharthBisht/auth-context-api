import './App.css';
import React from 'react';
// import {AuthContext} from './context/UserContext'
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  // const {isAuth} = React.useContext(AuthContext);
  return (
    <div className="App">
      {/* {console.log(isAuth)} */}
      <Navbar />
      <br />
      <Body />
    </div>
  );
}

export default App;
