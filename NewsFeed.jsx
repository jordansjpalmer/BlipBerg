import React from 'react';
import NavBar from './components/Navbar';
import SearchBar from './components/SearchBar';

import './styling/NewsFeed.scss';
import MainContainer from './containers/MainContainer';


const NewsFeed = () => {
    return (
        <div className='news-feed'>
            <NavBar />
            <SearchBar />
            <MainContainer />
        </div>
    )
}

export default NewsFeed;