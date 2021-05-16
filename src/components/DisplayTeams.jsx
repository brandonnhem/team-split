import React, { useState } from "react";

function DisplayTeams(props) {
    const _ = require('lodash');

    let chunkTeams = [];
    const arr = _.shuffle(props.players);
    var i,j,temparray,chunk = (arr.length / props.teams);
    for (i=0,j=arr.length; i<j; i+=chunk) {
        temparray = arr.slice(i,i+chunk);
        chunkTeams.push(temparray);
    }

    const [teams, setTeams] = useState(chunkTeams);

    function shuffleTeams() {
        let tempTeams = [];
        const newTeams = _.shuffle(props.players);
        var i,j,temparray,chunk = (newTeams.length / props.teams);
        for (i=0,j=newTeams.length; i<j; i+=chunk) {
            temparray = newTeams.slice(i,i+chunk);
            tempTeams.push(temparray);
        }
        setTeams(tempTeams);
    }


    // TODO: keep names on refresh so you don't have to add everyone again
    return (
        <div className="card center team-list">
            <h2>Final Team List</h2>
            <button className="shuffle-btn" onClick={() => shuffleTeams()}>Shuffle</button>
            {chunkTeams.map((value, index) => {
                return <div key={ index } className="card">
                    <h3>Team #{index + 1}</h3>
                    {value.map((player, idx) => {
                        return <div key={idx} className="player-card">{player}</div>
                    })}
                </div>
            })}
        </div>
    )
}

export default DisplayTeams;