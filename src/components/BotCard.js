import React, { Component } from 'react';

class BotCard extends Component {
  handleEnlistClick = () => {
    // Implement the logic to enlist a bot into your army
    // You can use state management (e.g., Redux) to keep track of enlisted bots.
  };

  render() {
    const { bot } = this.props;
    return (
      <div className="bot-card">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <button onClick={this.handleEnlistClick}>Enlist</button>
      </div>
    );
  }
}

export default BotCard;
