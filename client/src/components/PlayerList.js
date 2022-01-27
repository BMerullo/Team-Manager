import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import axios from 'axios';



const PlayerList = props => {

    const { playerList, setPlayerList } = props
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/players")
            .then((res) => {
                console.log(res.data);
                setPlayerList(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    const handleDelete = (playerId) => {
        axios.delete(`http://localhost:8000/api/players/${playerId}`)
        .then((res)=> {
            console.log(res.data);
            setPlayerList(playerList.filter((list)=>list._id !== playerId))
        })
        .catch((err)=> (
            console.log(err)
        ))
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="subHeader">
                    <h3 className="containerLink"><Link to="/players/list">List</Link></h3>
                    <h3><Link to="/players/addplayer">Add Player</Link></h3>
                </div>
                <div className="contentBox">
                <table class="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Preferred Position</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                playerList.map((list, index)=> (
                                    <tr>
                                        <th>{list.name}</th>
                                        <th>{list.position}</th>
                                        <th><button onClick={()=>handleDelete(list._id)} type="button" class="btn btn-danger">DELETE</button></th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PlayerList;