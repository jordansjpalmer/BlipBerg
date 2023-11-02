import React from 'react';
import NavBar from './components/Navbar';
import SearchBarContainer from './containers/SearchBarContainer';
import MainContainer from './containers/MainContainer';

import './styling/NewsFeed.scss';



const NewsFeed = () => {
    return (
        <div className='news-feed'>
            <NavBar />
            <SearchBarContainer />
            <MainContainer />
        </div>
    )
}

export default NewsFeed;