import React, { Component } from 'react';
import BotCard from './BotCard'; // Reuse the BotCard component

class YourBotArmy extends Component {
  state = {
    army: [], // Initialize an empty array for your army
  };

  // Implement functions to enlist and discharge bots from your army

  render() {
    const { army } = this.state;
    return (
      <div>
        <h2>Your Bot Army</h2>
        {army.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    );
  }
}

export default YourBotArmy;
