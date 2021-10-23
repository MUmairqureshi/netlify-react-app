import React from 'react';


import { Counter } from './components/counterinput';
import { counter } from './components/counterinput'
import './App.css';
import { makeServer } from './thunkpractice/mirageserver'
 makeServer({ enviroment: 'development' })
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
export default App;
