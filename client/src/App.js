import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import PlayerStatusOne from './components/PlayerStatusOne';
import PlayerStatusTwo from './components/PlayerStatusOne';
import PlayerStatusThree from './components/PlayerStatusOne';

function App() {

  const [playerList, setPlayerList] = useState([])
  const [errors, setErrors] = useState({})


  return (
    <div className="App">
      <Routes>
        <Route path="/players/list" element={<PlayerList playerList={playerList} setPlayerList={setPlayerList} />} />
        <Route path="/players/addPlayer" element={<AddPlayer playerList={playerList} setPlayerList={setPlayerList} />} />
        <Route path="/players/status" element={<PlayerStatusOne playerList={playerList} setPlayerList={setPlayerList}/>} />
        <Route path="/players/status/two" element={<PlayerStatusTwo playerList={playerList} setPlayerList={setPlayerList}/>} />
        <Route path="/players/status/three" element={<PlayerStatusThree playerList={playerList} setPlayerList={setPlayerList}/>} />
      </Routes>
    </div>
  );
}

export default App;
