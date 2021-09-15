
import './App.css';
import { useState } from 'react';
import NavBar from './Components/NavBar';
import MainBox from './Components/MainBox';

function App() {

  const [view, setView]= useState(false);

  function setType(arg){
    setView(arg);
  }

  return (
    <div className="App" style={{display:"flex", height:"100%", background:"#dfe6e9"}}>
      <NavBar type={setType}></NavBar>
      <MainBox view={view}></MainBox>
    </div>
  );
}

export default App;
