import React from "react";
import '../styling/Filters.scss';

function Filters({ onFilterChange }) {
    return (
        <div className="filters">
            <strong>Filters:</strong>
            <strong id="sectors">Sectors</strong>

            <label htmlFor="business">
                <input type="checkbox" id="business" name="business" value="business" onChange={onFilterChange} />
                Business
            </label>

            <label htmlFor="entertainment">
                <input type="checkbox" id="entertainment" name="entertainment" value="entertainment" onChange={onFilterChange} />
                Entertainment
            </label>

            <label htmlFor="sports">
                <input type="checkbox" id="sports" name="sports" value="sports" onChange={onFilterChange} />
                Sports
            </label>

            <label htmlFor="technology">
                <input type="checkbox" id="technology" name="technology" value="technology" onChange={onFilterChange} />
                Technology
            </label>

            <strong id="publications">Publications</strong>

            <label htmlFor="bbc-news">
                <input type="checkbox" id="bbc-news" name="bbc-news" value="bbc-news" onChange={onFilterChange} />
                BBC News
            </label>

            <label htmlFor="abc-news">
                <input type="checkbox" id="abc-news" name="abc-news" value="abc-news" onChange={onFilterChange} />
                ABC News
            </label>
        </div>
    );
}
export default Filters;