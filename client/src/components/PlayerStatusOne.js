import React from 'react';
import Header from './Header';
import { Link } from "react-router-dom";



const PlayerStatusOne = props => {

    const { playerList, setPlayerList } = props
    return(
        <div>
            <Header/>
            <div className="statusContainer">
            <div className="subHeader">
                    <h3 className="setupLink"><Link to="/players/status">Game 1</Link></h3>
                    <h3 className="setupLink"><Link to="/players/status/two">Game 2</Link></h3>
                    <h3><Link to="/players/status/three">Game 3</Link></h3>                   
                </div>
            </div>
        </div>
    )
}

export default PlayerStatusOne;