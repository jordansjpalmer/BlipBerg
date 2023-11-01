import React from "react";
import '../styling/ArticleCard.scss';

function ArticleCard({ article }) {
    return (
        <div className="article-card">
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} className="article-image" />
            <p className="article-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
            <p className="article-description">{article.descripton}</p>
            <a href={article.url} target="_blank" rel="noopener no referrer" className="read-more-button">Read more</a>
        </div>
    );
}

export default ArticleCard;