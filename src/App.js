import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import players from './FakeData/FakeData.json';
import { useEffect, useState } from 'react';


function App() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(players);
    console.log(players);
  },[])
  return (
    <div className="App">
     <h1>Team Selection</h1>
    </div>
  );
}

export default App;
