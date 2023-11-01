import React from "react";
import '../styling/NavBar.scss'

function NavBar() {
    return (
        <div className="navbar">
            <span id="BlipBerg">BlipBerg</span>
            <button>Home</button>
            <button>Favorite Articles</button>
        </div>
    );
}
export default NavBar;