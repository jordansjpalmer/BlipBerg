import React from 'react';
import mockdata from './data/mockdata.json';
import ArticlesList from './components/ArticlesList.jsx';
import NavBar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';

import './styling/NewsFeed.scss';


const NewsFeed = () => {
    return (
        <div className='news-feed'>
            <NavBar />
            <SearchBar />
            <Filters />
            <h1>News Feed</h1>
            <ArticlesList articlesData={mockdata} />
        </div>
    )
}

export default NewsFeed;