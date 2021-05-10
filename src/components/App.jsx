import React, { useState } from "react";
import Logo from "./Logo";
import Footer from "./Footer";
import AddPlayers from "./AddPlayers";
import AddTeams from "./AddTeams";

function App() {
    return (
        <div>
            <Logo />
            <AddPlayers />
            <AddTeams />
            <button className="submit-btn">Submit</button>
            <Footer />
        </div>
    )
}

export default App;