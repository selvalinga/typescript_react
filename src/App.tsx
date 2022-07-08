import React from 'react';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning  React with TypeScripts
        </a>
        <br/>
        <Link to='/typeAssertion'>TypeAssertion concepts</Link>
        <br/>
        <Link to='/async'>Async and await</Link>
     
    </div>
  );
}

export default App;
