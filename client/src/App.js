import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';

function App() {

  const [playerList, setPlayerList] = useState([])
  const [errors, setErrors] = useState({})


  return (
    <div className="App">
      <Routes>
        <Route path="/players/list" element={<PlayerList playerList={playerList} setPlayerList={setPlayerList} />} />
        <Route path="/players/addPlayer" element={<AddPlayer playerList={playerList} setPlayerList={setPlayerList} />} />
      </Routes>
    </div>
  );
}

export default App;
