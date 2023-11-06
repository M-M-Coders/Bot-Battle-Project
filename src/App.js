import React, { Component } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bot Battlr</h1>
        <BotCollection />
        <YourBotArmy />
      </div>
    );
  }
}

export default App;
