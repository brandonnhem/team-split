import React, { useState } from "react";
import Logo from "./Logo";
import Footer from "./Footer";
import AddPlayers from "./AddPlayers";
import AddTeams from "./AddTeams";
import DisplayTeams from "./DisplayTeams";

function App() {
    const [submit, setSubmit] = useState(false);
    const [finalPlayers, setFP] = useState([]);
    const [finalTeams, setFT] = useState(2);

    function onSubmitPlayers(playerState) {
        setFP(prevFP => [...prevFP, playerState]);
    }

    function onSubmitTeams(teamState) {
        setFT(teamState);
    }

    function onPlayerRemoval(newList) {
        setFP(newList);
    }
   
    function handleGoBack(callback) {
        setSubmit(callback.submit);
        setFP(callback.prevTeams);
    }

    if (!submit) {
        return (
            <div>
                <Logo />
                <AddPlayers onSubmit={ onSubmitPlayers } onRemoval={ onPlayerRemoval } returningPlayers={ finalPlayers }/>
                <AddTeams onSubmit={ onSubmitTeams }/>
                <button className="submit-btn"
                        onClick={() => {
                            if (finalPlayers.length >= 2) {
                                setSubmit(true);
                            } else {
                                alert('Minimum required players is 2');
                            }
                        }}>Submit</button>
                <Footer />
            </div>
        );
    } else {
        return (
            <div>
                <Logo />
                <DisplayTeams players={ finalPlayers } teams={ finalTeams } handleGoBack={ handleGoBack }/>
                <Footer />
            </div>
        )
    }
}

export default App;