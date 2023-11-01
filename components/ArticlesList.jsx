import React from 'react'
import ArticleComponent from './ArticleCards';

const ArticlesList = ({ articlesData }) => {
    return (
        <div>
            {articlesData.articles.map(article => (
                <ArticleComponent key={article.url} article={article} />
            ))}
        </div>
    );
}

export default ArticlesList;