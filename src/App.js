import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Select from './components/Select/Select';
import Hitters from './components/Players/Hitters';
import Pitchers from './components/Players/Pitchers';

function App() {
  return (
    <div className='App'>
      <Header />
      <Select />
      <Hitters />
      <Pitchers />
    </div>
  );
}

export default App;
