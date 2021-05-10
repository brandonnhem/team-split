import React, { useState } from "react";

function AddPlayers() {
    const [players, setPlayers] = useState([]);

    function addPlayer(newPlayer) {
        if (!players.includes(newPlayer) && newPlayer !== '' && newPlayer.length <= 10 && players.length < 128) {
            setPlayers(prevArray => [...prevArray, newPlayer]);
            setPlayer('');
        } else if (newPlayer === '') {
            alert('Field cannot be empty.');
        } else if (newPlayer.length > 10) {
            alert('Player name is too long.');
        } else {
            alert('Cannot have duplicate players.');
        }
    }

    // function removePlayer(newPlayer) {
    //     // setPlayers(() => {
    //     //     let index = players.indexOf(newPlayer);
    //     //     if (index > -1) {
    //     //         players.splice(index, 1);
    //     //     }
    //     // });
    //     const newPlayers = players.filter(item => item.key !== newPlayer);
    // }

    const [player, setPlayer] = useState('');

    return (
        <div className="card center">
            <h2>Players: </h2>
            <div className="player-field">
                <input type="text" name="player" id="player" placeholder="Juju" value={player} onChange={e => setPlayer(e.target.value)}></input>
                <button className="add-btn" onClick={() => addPlayer(player)}>+</button>
            </div>
            <div className="players">
                {players.map((value, index) => {
                    return <div key={index} className="player-card">
                        {value}
                        {/* <button className="close-btn" onClick={() => removePlayer(value)}>X</button> */}
                    </div>
                })}
            </div>
        </div>
    );
}

export default AddPlayers;