import React from 'react';
import './App.css';
import { PlayerCard } from './components/PlayerCard';
import { ModeBtn } from './components/ModeBtn'


class App extends React.Component {

  state = {
    players: []
  }
  
  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
    .then(res => res.json())
    .then(res => this.setState({players: res}))
    .catch(err => console.log(`Fetch error:`, err));
  }

  render() {  
    
    // console.log(`Inside of render`, this.state.players);
    
    return (
      <div className="App">
        <ModeBtn />
        { this.state.players.map( player => <PlayerCard key={player.id} player={player} />) }
      </div>
    );
  }
}

export default App;
