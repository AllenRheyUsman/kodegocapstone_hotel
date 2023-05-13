import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Header from './components/Header';
import MainCar from'./components/MainCar';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Car2 from './components/Car2';
import Dropdown from './components/Dropdown';







function App() {
  return (
    <div className="App">
  
      <Header/>
     
    </div>
  );
}
const root =
ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);

export default App;
