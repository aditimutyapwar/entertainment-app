import React, {useState} from 'react';
import Search from './components/searchComponent/Search';
import Results from './components/resultsComponent/Results';
import MovieDetails from './components/movieDetailsComponent/MovieDetails';
import axios from 'axios';

const App = () => {
  const [searchVal, setSearchVal] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState({});
  const [error, setError] = useState('');
  
  const search = (e) => {
    if(e.key === "Enter"){ 
      axios('https://api.themoviedb.org/3/search/movie?api_key=4eb033efceb27677c3831bf9be768992&page=1&query='+ searchVal).then( ({ data }) => {
        let results = data.results;
        setResults(results);
        setError('');
      }).catch(err => {
        setResults([]);
        setError('please enter keyword to search');
      });
    };
  }; 

  const handleInputVal = (e) => { 
    let keyword = e.target.value;
    setSearchVal(keyword);
  };

  const movieDetails = (id) => {
    axios('https://api.themoviedb.org/3/movie/'+id+'?api_key=4eb033efceb27677c3831bf9be768992&language=en-US').then( ({ data }) => {
      let result = data;

      setSelected(result);

    });
  };

  const closeMovieDetails = () => {
    setSelected({})
  };

  return (
    <div className="App">
        <header className="header">
          <h1>MOVIE SEARCH DB</h1>
        </header>
        <main className="main">
          <Search 
            handleInputVal={handleInputVal}
            search={search}
          />
          <Results 
            results={results} 
            movieDetails={movieDetails}
            error={error}
          />
          {(typeof selected.title != "undefined") ? <MovieDetails selected={selected} closeMovieDetails={closeMovieDetails}/> : false }
        </main>
    </div>
  );
};

export default App; 