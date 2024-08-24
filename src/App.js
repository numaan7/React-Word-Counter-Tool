import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Textutil from './components/Textutil';
import Popnotify from './components/Popnotify';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {

  const Toggle = () => {
    if (mode === 'light') {
      console.log('dark mode')
      showAlert('Dark mode is now enabled!', 'success')
      setMode('dark');
      
     
      document.body.style.backgroundColor = "#121212";
     


    } else {
      console.log('light mode')
      showAlert('Light mode is now enabled!', 'success')
      setMode('light');
      document.body.style.backgroundColor = "white";
      
   


    }



  }
  const [mode, setMode] = useState('light');
  const [msg, setMsg] = useState(null)

  const showAlert = (msg, type) => {
    setMsg({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setMsg(null)
    }, 3000);
  }





  return (
    <>
      <Router>
        <Navbar mode={mode} setMode={setMode} Toggle={Toggle} />
        <Popnotify msg={msg} setMsg={setMsg} />
        <div className={`container mt-3 ${(mode === 'dark') ? 'text-light' : 'text-dark'}`}>
        <Routes>
          <Route path="/about" element={ <About />}/>
           
          

          <Route path="/"  element={  <Textutil mode={mode} showAlert={showAlert} /> } />
     
        </Routes>
        </div>
      </Router>
      <footer className={`mt-5 p-3  sticky-bottom text-center w-100 text-${mode} bg-${mode} `}>
  <b>
    <p className={`text-center ${(mode === 'dark') ? 'text-light' : 'text-dark'}`} >Word Counter Tool &copy; 2024</p>
    </b>
</footer>
    </>
  );
}

export default App;