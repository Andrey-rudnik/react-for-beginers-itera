import React from 'react';
import {Footer} from './Footer'
import './App.css';

const user = {userName: 'Tom'};
const App = () => (
  <div className="App">
    <h1>Hello world, i`m {user.userName}</h1>
    <Footer copyright='c'/>
  </div>
)

export default App;
