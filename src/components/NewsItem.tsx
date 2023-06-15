import React from 'react';
import { Article } from '../App';
import '../styles/NewsItem.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

interface NewsItemProps {
  article: Article;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onArticleRead: () => void;
  isRead: boolean;
}

const NewsItem: React.FC<NewsItemProps> = ({
  article,
  isFavorite,
  onToggleFavorite,
  onArticleRead,
  isRead,
}) => {
  const date = new Date(article.publishedAt);

  // Convert date to a localized string
  const localizedDate =
    date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

  const getWebsite = (url: string) => {
    const withoutProtocol = url.replace('https://', '').replace('http://', '');
    const domain = withoutProtocol.split('/')[0];
    return domain;
  };

  const website = getWebsite(article.url);

  const handleOnClick = () => {
    onArticleRead();
    window.open(article.url, '_blank');
  };

  return (
    <div
      className={`news-item ${isRead ? 'read' : ''}`}
      onClick={handleOnClick}
    >
      <img
        src={article.urlToImage}
        alt={article.title}
        className='news-item-image'
      />
      <div className='news-item-content'>
        <h2 className={`news-item-title ${isRead ? 'read' : ''}`}>
          {article.title}
        </h2>
        <div className='news-item-source'>
          <img
            src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`}
            alt={article.source.id}
          />
          <span>
            {article.source.name} - {localizedDate}
          </span>
        </div>
        <p className='news-item-description'>{article.description}</p>
        <button
          onClick={onToggleFavorite}
          className='news-item-button favorite-icon'
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
