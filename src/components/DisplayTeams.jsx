function DisplayTeams(props) {
    const _ = require('lodash');

    let chunkTeams = [];
    const arr = _.shuffle(props.players);
    var i,j,temparray,chunk = (arr.length / props.teams);
    for (i=0,j=arr.length; i<j; i+=chunk) {
        temparray = arr.slice(i,i+chunk);
        chunkTeams.push(temparray);
    }

    return (
        <div className="card center team-list">
            <h2>Final Team List</h2>
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