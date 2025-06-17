import React from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/routes/Routes';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;