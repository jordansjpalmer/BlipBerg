import React from 'react';
import SearchBarContainer from './containers/SearchBarContainer';
import MainContainer from './containers/MainContainer';
import NavBarContainer from './containers/NavBarContainer';

import './styling/NewsFeed.scss';



const NewsFeed = () => {
    return (
        <div className='news-feed'>
            <NavBarContainer />
            <SearchBarContainer />
            <MainContainer />
        </div>
    )
}

export default NewsFeed;