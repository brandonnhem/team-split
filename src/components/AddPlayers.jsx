import React, { useState } from "react";

function AddPlayers(props) {
    const [players, setPlayers] = useState([]);

    function addPlayer(newPlayer) {
        if (!players.includes(newPlayer) && newPlayer !== '' && newPlayer.length <= 10 && players.length < 128) {
            setPlayers(prevArray => [...prevArray, newPlayer]);
            setPlayer('');
            props.onSubmit(newPlayer);
        } else if (newPlayer === '') {
            alert('Field cannot be empty.');
        } else if (newPlayer.length > 10) {
            alert('Player name is too long.');
        } else {
            alert('Cannot have duplicate players.');
        }
    }

    function removePlayer(value) {
        const newList = players.filter(item => item !== value);
        setPlayers(newList);
        props.onRemoval(newList);
    }

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
                    return <div key={index} className="player-card" onClick={() => removePlayer(value)}>
                        {value}
                    </div>
                })}
            </div>
        </div>
    );
}

export default AddPlayers;