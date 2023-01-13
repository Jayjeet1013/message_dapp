import { useState } from 'react';
import './App.css';

function App() {
const [message,setMessage]=useState();

  return (
    <div className="App">
      <header className="App-header">
         <h1>Decentralized Messsage ARea</h1>
         
      </header>
      <body className='body'>
        <button type='button' className='btn'>Connect</button>

      </body>
      <footer className=' footer'>
        Made by Jay
      </footer>
    </div>
  );
}

export default App;
