import React, { Component } from 'react';
import BotCard from './BotCard';

class BotCollection extends Component {
  state = {
    bots: [], // Initialize an empty array for bots
  };

  componentDidMount() {
    // Fetch data from the JSON server
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((bots) => this.setState({ bots }));
  }

  render() {
    const { bots } = this.state;
    return (
      <div>
        <h2>Bot Collection</h2>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    );
  }
}

export default BotCollection;
