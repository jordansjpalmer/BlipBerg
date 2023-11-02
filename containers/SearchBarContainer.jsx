import React from "react";
import { useDispatch } from "react-redux";
import { SET_ARTICLES } from "../actions/actionTypes";
import { fetchArticlesBySearch } from "../server/newsAPI";
import SearchBar from "../components/SearchBar";
import { debounce } from 'lodash';

//create and import styling
//remember to add to NewsFeed

const SearchBarContainer = () => {
    const dispatch = useDispatch();

    const debouncedSearch = debounce(async (query) => {
        if (query.trim() !== '') {
            const articles = await fetchArticlesBySearch(query);
            dispatch({ type: SET_ARTICLES, payload: articles });
        }
    }, 300);

    const handleSearch = (query) => {
        debouncedSearch(query)
    };
    return (
        <div className="SearchBarContainer">
            < SearchBar onSearch={handleSearch}/>
        </div>
    );
};

export default SearchBarContainer;