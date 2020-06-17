import React from 'react';
import classes from './ImageSlide.module.css';
const ImageSlide = ({ currPopular, movieDetails }) => {
    console.log(currPopular);
    let img_src = null;
    if(currPopular){
         img_src = "https://image.tmdb.org/t/p/w185" + currPopular.poster_path;
    }
  
    return (
      <div className={classes.imageSlide} onClick={() => movieDetails(currPopular.id) }><img src={img_src} alt='movie_poster'/></div>
    );
  };

  export default ImageSlide;