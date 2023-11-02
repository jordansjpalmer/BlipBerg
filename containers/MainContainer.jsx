import React from 'react'
import { SET_ARTICLES } from '../actions/actionTypes';
import { useDispatch,useSelector } from 'react-redux';

import FiltersContainer from './FiltersContainer'
import ArticlesContainer from './ArticlesContainer'
import { fetchHomePageArticles } from '../server/newsAPI';
import { useEffect } from 'react';


import '../styling/MainContainer.scss'

const MainContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles);

    useEffect(() => {
        async function fetchData() {
            const articles = await fetchHomePageArticles();
            dispatch({ type: SET_ARTICLES, payload: articles })
        }
        fetchData();
    }, []);

    return (
        <div className='main-container'>
            <FiltersContainer />
            <ArticlesContainer articlesData={articles}/>
        </div>
    );
}

export default MainContainer;