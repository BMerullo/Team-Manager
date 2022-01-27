import React from 'react';
import { Link } from "react-router-dom";


const PlayerStatusThree = props => {

    const { playerList, setPlayerList } = props
    return (
        <div>
            <Header />
            <div className="container">
                <h3 className="containerLink"><Link to="/players/status">Game 1</Link></h3>
                <h3 className="containerLink"><Link to="/players/status/two">Game 2</Link></h3>
                <h3><Link to="/players/status/three">Game 3</Link></h3>
            </div>
        </div>
    )
}

export default PlayerStatusThree;