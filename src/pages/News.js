// src/components/Navbar.js
import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Modal from '../components/News/Modal';
import './News.scss'; 

const News = ( {articles} ) => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    const reversedArticles = [...articles].reverse();
    
    return(
        <div>
            <Navbar />
            <div>
            <h1>News</h1>
            {reversedArticles.map((article, index) => (
                <div key={index} className="news-article" onClick={() => handleArticleClick(article)}>
                    <h2>{article.title}</h2>
                    <p>{article.content.substring(0, 100)}...</p> {/* Display only the first 100 characters of the content */}
                </div>
            ))}
            {selectedArticle && <Modal article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
            </div>
            <Footer />
        </div>
    )
};

export default News;