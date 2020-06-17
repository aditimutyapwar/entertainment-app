import React from 'react';
import Arrow from '../arrowComponent/Arrow';
import ImageSlide from '../imageSlideComponent/ImageSlide';
import classes from './Carousel.module.css';
const Carousel = ({ previousSlide, nextSlide, popularResult, currIndex, movieDetails  }) => {
  
  return (
    <div className={classes.carousel}>
      <h2>TRENDING MOVIES OF THE DAY..</h2>
    <Arrow
      direction="left"
      clickFunction={ previousSlide }
      glyph="&#9664;" />

    <ImageSlide 
      currPopular={ popularResult[currIndex]} 
      movieDetails={movieDetails} />
    <ImageSlide 
      currPopular={ popularResult[currIndex + 1]} 
      movieDetails={movieDetails} />
    <ImageSlide 
      currPopular={ popularResult[currIndex + 2]} 
      movieDetails={movieDetails} />
    <ImageSlide 
      currPopular={ popularResult[currIndex + 3]} 
      movieDetails={movieDetails} />


    <Arrow
      direction="right"
      clickFunction={ nextSlide }
      glyph="&#9654;" />
  </div>
);
}

export default Carousel