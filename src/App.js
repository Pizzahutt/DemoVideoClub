import React from 'react';
import './styles/App.css';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
        <BrowserRouter>
          <div className="App">
            <Home />
          </div>
        </BrowserRouter>
  );
}

export default App;