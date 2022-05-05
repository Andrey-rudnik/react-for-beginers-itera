import React from 'react';
import {Footer} from './Footer'
import './App.css';

const user = {
    userName: 'Tom',
    userInfo: 'start React course',
    userContacts: {tell: '0634587852', email: 'Tomstart@gmail.com'}
};
const App = () => (
  <div className="App">
    <h1>Hello world, i`m {user.userName}</h1>
      <div>
          <h3>I`m {user.userName}</h3>
          <h5>About me:</h5>
          <span>{user.userInfo}</span>
          <h5>My contacts</h5>
          <ul>
              <li>{user.userContacts.tell}</li>
              <li>{user.userContacts.email}</li>
          </ul>
      </div>
    <Footer copyright='c'/>
  </div>
)

export default App;
