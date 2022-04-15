import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Direction from './components/Direction/Direction';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  // const originRef=useRef('');
  // const destinationRef =useRef('');

  // const handleDirection =(e)=>{
  //   setOrigin(originRef.current.value);
  //   setDestination(destinationRef.current.value);
  //   e.preventDefault();
  // }
  return (
    <div className="App">
      
      <nav class="navbar navbar-light  bg-success text-white">
  <div class="container-fluid">
    <a class="navbar-brand class" href="#">
      
      Plan & Go
    </a>
  </div>
</nav>
       



      <input className="text-secondary m-1 font-monospace" type="text" placeholder="MY PLACE" />
      <br/>
      <br/>
      <input type='submit' value='Get Direction'></input>
      <Direction origin={origin} destination={destination}></Direction>
      
    </div>
  );
}

export default App;