import React, { useState } from "react";

function AddTeams(props) {
    const [teams, setTeams] = useState(2);

    function incrementCount() {
        if (teams + 1 <= 64) {
            setTeams(teams + 1);
            props.onSubmit(teams);
        } else {
            alert('Teams cannot exceed 64');
        }
    }

    function decrementCount() {
        if (teams - 1 >= 2 ) {
            setTeams(teams - 1);
            props.onSubmit(teams);
        } else {
            alert('Number of Teams must be minimum of 2');
        }
    }

    return (
        <div className="card center">
            <h2>Number of Teams: </h2>
            <div className="quantity">
                <button className="modify-btn" onClick={decrementCount}>-</button>
                {teams}
                <button className="modify-btn" onClick={incrementCount}>+</button>
            </div>
        </div>
    );
}

export default AddTeams;