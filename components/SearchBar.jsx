import React from "react";
import '../styling/SearchBar.scss'

function SearchBar({ onSearch }) {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Enter keyword" onChange={onSearch} />
        </div>
    );
}
export default SearchBar;