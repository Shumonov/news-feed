import React, { useState } from 'react';
import { Article } from '../App';
import NewsItem from './NewsItem';
import Header from './Header';

const Favorites: React.FC = () => {
  // Initialize favorites state from LocalStorage
  const [favorites, setFavorites] = useState<Article[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    } else {
      return [];
    }
  });

  const removeFavorite = (url: string) => {
    const newFavorites = favorites.filter((article) => article.url !== url);
    // Save new favorites list to state and LocalStorage
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className="favorites-container">
      <Header title="Favorites" />
      <div className='news-feed'>
        {favorites.length === 0 ? (
          <p>
            You currently have no favorites. You can add favorites on the{' '}
            <a href='/'>News Feed</a> page.
          </p>
        ) : (
          favorites.map((article) => (
            <NewsItem
              key={article.url}
              article={article}
              isFavorite={true}
              onToggleFavorite={() => removeFavorite(article.url)}
              onArticleRead={() => {}}
              isRead={false}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
