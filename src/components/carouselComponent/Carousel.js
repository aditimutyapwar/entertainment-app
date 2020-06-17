import React from 'react';
import Arrow from '../arrowComponent/Arrow';
import ImageSlide from '../imageSlideComponent/ImageSlide';
import classes from './Carousel.module.css';
const Carousel = ({ previousSlide, nextSlide, popularResult, currIndex, movieDetails  }) => {
  
  return (
    <div className={classes.carousel}>
      <h2>Popular Movies...</h2>
    <Arrow
      direction="left"
      clickFunction={ previousSlide }
      glyph="&#9664;" />

    <ImageSlide 
      currPopular={ popularResult[currIndex]} 
      movieDetails={movieDetails} />

    <Arrow
      direction="right"
      clickFunction={ nextSlide }
      glyph="&#9654;" />
  </div>
);
}

export default Carousel