import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="center">
            <p>Brandon Nhem</p>
            <p>Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;