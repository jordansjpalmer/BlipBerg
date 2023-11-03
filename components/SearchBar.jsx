import React, { useState } from "react";
import '../styling/SearchBar.scss'

function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] =useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            if(onSearch) {
                onSearch(inputValue);
            }
            setInputValue('');
        }
    };

    return (
        <div className="search-bar">
            <input type="text" 
            placeholder="Search for a specific keyword..."
            value={inputValue} 
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} />
        </div>
    );
}
export default SearchBar;