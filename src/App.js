import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Select from './components/Select/Select';
import Players from './components/Players/Players';

function App() {
  return (
    <div className='App'>
      <Header />
      <Select />
      <Players />
    </div>
  );
}

export default App;
