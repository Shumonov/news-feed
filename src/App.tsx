import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import Favorites from './components/Favorites';

export interface Article {
  title: string;
  source: Source;
  publishedAt: string;
  description: string;
  urlToImage: string;
  url: string;
}

export interface Source {
  id: string;
  name: string;
}

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<NewsFeed />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;
