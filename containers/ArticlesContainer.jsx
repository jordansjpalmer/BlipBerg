import React from 'react';
import '../styling/ArticlesContainer.scss'
import ArticleCard from '../components/ArticleCard';


const ArticlesContainer = ({ articlesData }) => {
    return (
        <div className='articles-container'>
            {articlesData.articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}

export default ArticlesContainer;
