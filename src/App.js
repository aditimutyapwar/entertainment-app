import React, {useState, useEffect} from 'react';
import Search from './components/searchComponent/Search';
import Results from './components/resultsComponent/Results';
import MovieDetails from './components/movieDetailsComponent/MovieDetails';
import Carousel from './components/carouselComponent/Carousel';
import axios from 'axios';

const App = () => {
  const [searchVal, setSearchVal] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState({});
  const [error, setError] = useState('');
  const [currIndex, setCurrIndex] = useState(0);
  const [popularResult, setPopularResult] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.themoviedb.org/3/trending/all/day?api_key=4eb033efceb27677c3831bf9be768992');
      setPopularResult(result.data.results);
      };
      fetchData();
  }, []);

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

  const previousSlide = () => {
    const lastIndex = popularResult.length - 1;
    const shouldResetIndex = currIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currIndex - 1;
    setCurrIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = popularResult.length - 1;
    const shouldResetIndex = currIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currIndex + 1;
    setCurrIndex(index);
  }

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
        <Carousel 
            previousSlide={previousSlide}
            nextSlide={nextSlide}
            popularResult={popularResult}
            currIndex={currIndex}
            movieDetails={movieDetails} />
          <hr />
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