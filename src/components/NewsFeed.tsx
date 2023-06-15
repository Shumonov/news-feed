import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from '../App';
import NewsItem from './NewsItem';
import Header from './Header';
import '../styles/NewsFeed.css';
import '../styles/SearchBar.css';
import { AiOutlineClose } from 'react-icons/ai';

const NewsFeed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filter, setFilter] = useState('');
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [favorites, setFavorites] = useState<Article[]>(() => {
    const localFavorites = localStorage.getItem('favorites');
    return localFavorites ? JSON.parse(localFavorites) : [];
  });

  const [readArticles, setReadArticles] = useState<string[]>(() => {
    const localReadArticles = localStorage.getItem('readArticles');
    return localReadArticles ? JSON.parse(localReadArticles) : [];
  });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          apiKey: process.env.API_KEY,
          country: 'us',
          q: filter,
        },
      });

      setArticles(result.data.articles);
    };

    fetchData();
  }, [filter]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('readArticles', JSON.stringify(readArticles));
  }, [readArticles]);

  const toggleFavorite = (article: Article) => {
    const isFavorite = favorites.some(
      (favorite) => favorite.url === article.url
    );

    if (isFavorite) {
      setFavorites(
        favorites.filter((favorite) => favorite.url !== article.url)
      );
    } else {
      setFavorites([...favorites, article]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilter(inputValue);
  };

  const clearFilter = () => {
    setInputValue('');
    setFilter('');
    setSearchExecuted(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setFilter(inputValue);
      setSearchExecuted(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className='search-bar'>
        <div className='search-input-container'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Search articles'
          />
          {searchExecuted && (
            <button
              type='button'
              className='clear-button'
              onClick={clearFilter}
            >
              <AiOutlineClose />
            </button>
          )}
        </div>
      </form>
      <Header title="News Feed" />
      <div className='news-feed'>
        {articles.map((article) => (
          <NewsItem
            key={article.url}
            article={article}
            isFavorite={favorites.some(
              (favorite) => favorite.url === article.url
            )}
            onToggleFavorite={() => toggleFavorite(article)}
            onArticleRead={() =>
              setReadArticles([...readArticles, article.url])
            }
            isRead={readArticles.includes(article.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
