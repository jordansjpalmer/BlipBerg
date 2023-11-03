import React from "react";
import '../styling/NavBar.scss'

function NavBar({ onHomeClick }) {
    return (
        <div className="navbar">
            <span id="BlipBerg">BlipBerg</span>
            <button className="home-button" onClick={onHomeClick}>Home</button>
            <button>Favorite Articles</button>
        </div>
    );
}
export default NavBar;