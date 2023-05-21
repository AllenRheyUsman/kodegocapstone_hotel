import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

import './App.css';

import Header from './components/Header';
import MainCar from'./components/MainCar';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Car2 from './components/Car2';
import Search from './components/search';
import Body3 from './components/Body3';







function App() {
  return (
    
    <div className="App">
  
      <Header/>

      <br/>
      <br/>
      <Search/>
      <br/>
      <br/>
      <br/>
      <br/>
      <MainCar/>



     <Body2/>
   < Body3 />
    </div>
    
  );
}
const root =
ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);

export default App;
