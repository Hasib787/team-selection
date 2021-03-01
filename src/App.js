import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import playerData from './FakeData/FakeData.json';
import { useEffect, useState } from 'react';
import Player from './components/player/Player';


function App() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
  },[])
  return (
    <div>
      <h1>All Players List:{player.length}</h1>
        {
          player.map(player=><Player player={player}></Player>)
        }
    </div>
  );
}

export default App;
