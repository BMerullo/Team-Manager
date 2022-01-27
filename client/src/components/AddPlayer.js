import React, { useState } from 'react';
import Header from './Header';
import { Link } from "react-router-dom";
import axios from 'axios';

const AddPlayer = props => {
    const { playerList, setPlayerList } = props;
    const [player, setPlayer] = useState({
        name: "",
        position: ""
    })
    // const [errors, setErrors] = useState({

    // });

    const handleChange = (e) => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = (e) => {
        axios
            .post("http://localhost:8000/api/players",
                player,
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPlayerList([...playerList, res.data]);
                setPlayer({
                    name: "",
                    position: ""
                },)
            })
            .catch((err)=>{
                console.log(err);
            })
    }


    return (
        <div>
            <Header />
            <div className="container">
                <div className="subHeader">
                    <h3 className="containerLink"><Link to="/players/list">List</Link></h3>
                    <h3><Link to="/players/addplayer">Add a Player</Link></h3>
                </div>
                <div className="formDiv">
                    <form onSubmit={submitHandler}>
                        <div className="form-floating mb-3 formdiv">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                name="name"
                                placeholder="Team Name"
                                value={player.name}
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Team Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                name="position"
                                placeholder="Preferred Position"
                                value={player.position}
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Preferred Position</label>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Primary</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AddPlayer;