import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Select from './components/Select/Select';
import Hitters from './components/Players/Hitters';
import Pitchers from './components/Players/Pitchers';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div className='App'>
      <Header />
      <Select />
      <Hitters />
      <Pitchers />
      <Summary />
    </div>
  );
}

export default App;
