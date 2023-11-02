import React from 'react'
import FiltersContainer from './FiltersContainer'
import ArticlesContainer from './ArticlesContainer'
import mockdata from '../data/mockdata.json';

import '../styling/MainContainer.scss'

const MainContainer = () => {
    return (
        <div className='main-container'>
            <FiltersContainer />
            <ArticlesContainer articlesData={mockdata}/>
        </div>
    );
}

export default MainContainer;