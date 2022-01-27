import React from 'react';
import { Link } from "react-router-dom";


const Header = props => {



    return (
        <div>
            <div className="header">
                <h3 className="headerLink"><Link to="/players/list">Manage Players</Link></h3>
                <h3><Link to="/players/status">Manage Player Status</Link></h3>
            </div>
        </div>
    )
}


export default Header;