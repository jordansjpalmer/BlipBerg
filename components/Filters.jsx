import React from "react";
import '../styling/Filters.scss';

function Filters({ onFilterChange }) {
    return (
        <div className="filters">
            <strong>Filters:</strong>
            <strong id="sectors">Sectors</strong>
            <input type="checkbox" id="business" name="business" value="business" onChange={onFilterChange} />
            <label htmlFor="business">Business</label>
            <input type="checkbox" id="entertainment" name="entertainment" value="entertainment" onChange={onFilterChange} />
            <label htmlFor="entertainment">Entertainment</label>
            <input type="checkbox" id="sports" name="sports" value="sports" onChange={onFilterChange} />
            <label htmlFor="sports">Sports</label>
            <input type="checkbox" id="technology" name="technology" value="technology" onChange={onFilterChange} />
            <label htmlFor="technology">Technology</label>
            <strong id="publications">Publications</strong>
            <input type="checkbox" id="bbc-news" name="bbc-news" value="bbc-news" onChange={onFilterChange} />
            <label htmlFor="bbc-news">BBC News</label>
            <input type="checkbox" id="abc-news" name="abc-news" value="abc-news" onChange={onFilterChange} />
            <label htmlFor="abc-news">ABC News</label>
        </div>
    );
}
export default Filters;