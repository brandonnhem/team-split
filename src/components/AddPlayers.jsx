import React, { useState } from "react";

function AddPlayers(props) {
    const [players, setPlayers] = useState(() => {
        if (props.returningPlayers.length > 1) {
            return props.returningPlayers;
        } else {
            return [];
        }
    });

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

    function handleKeyPress(e) {
        if(e.key === 'Enter') {
            addPlayer(player);
        }
    }

    return (
        <div className="card center">
            <h2>Enter Player(s): </h2>
            <div className="player-field">
                <input type="text" name="player" id="player" placeholder="Juju" value={player} onChange={e => setPlayer(e.target.value)} onKeyPress={e => handleKeyPress(e)}></input>
                <button className="add-btn" onClick={() => addPlayer(player)}>+</button>
            </div>
            {players.length >= 1 && 
                <p>Tip: Press on a name to delete it.</p>
            }
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