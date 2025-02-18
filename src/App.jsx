import { useEffect, useState } from 'react';
import Search from './components/Search';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, seterrorMessage] = useState('');

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
      const response = await fetch(endpoint, API_OPTIONS);
      if(!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      console.log(data);
      
    } catch (error) {
      console.error('error in fetching movies');
      seterrorMessage('Error fetching movies');
    }
  };

  useEffect(() => {
    
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img id='header-image' src="./hero.png" alt="Hero-banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You &#39; ll Love</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className='all-movies'>
          <h2>All Movies</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
        <h1 className='text-white'>{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;
