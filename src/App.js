import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import playerData from './FakeData/FakeData.json';
import { useEffect, useState } from 'react';
import Player from './components/player/Player';
import PlayerCart from './components/playerCart/PlayerCart';


function App() {
  const [players, setPlayer] = useState([]);
  const [playerAdded, setplayerAdded] = useState([]);

  useEffect(() => {
    setPlayer(playerData);
  },[])

const handleAddPlayer=(player)=>{
    const newPlayerAdded = [...playerAdded, player];
    setplayerAdded(newPlayerAdded);
}
  return (
    <div className="player-container">
      <div >
          <h1>All Players List</h1>
          {
            players.map(player=><Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
          }
      </div>
      <div  className="selected-player">
        <PlayerCart playerCart={playerAdded}></PlayerCart>
      </div>
    </div>
  );
}

export default App;
