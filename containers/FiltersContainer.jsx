import React from 'react';
import { useDispatch }  from 'react-redux';
import '../styling/FiltersContainer.scss';
import Filters from '../components/Filters';
import { fetchArticlesByCategory } from '../server/newsAPI';
import { SET_ARTICLES } from '../actions/actionTypes';
import { fetchArticlesByPublication } from '../server/newsAPI';

const FiltersContainer = () => {
    const dispatch = useDispatch();

    const onFilterChange = async (e) => {
        const selectedCategory = e.target.value;
        const articles = await fetchArticlesByCategory(selectedCategory);
        dispatch({ type: SET_ARTICLES, payload: articles })
    };
    const onPubFilterChange = async (e) => {
        const selectedCategory = e.target.value;
        const articles = await fetchArticlesByPublication(selectedCategory);
        dispatch({ type: SET_ARTICLES, payload: articles })
    };
    return (
        <div className="filters-container">
        <Filters onFilterChange={onFilterChange} onPubFilterChange={onPubFilterChange}/>
        </div>
    );
}

export default FiltersContainer;