import React from 'react';
import classes from '../movieDetailsComponent/MovieDetails.module.css';

const MovieDetails = ({ selected, closeMovieDetails }) => {
    const img_src = "https://image.tmdb.org/t/p/w185" + selected.poster_path;
    
    return(
       <section className={classes.movieDetails}>
           <div className={classes.content}>
           <h2> 
                {selected.title}
                </h2>
                <p className={classes.rating}>
                    Rating: {selected.vote_average}
                </p>
                <div className={classes.overview}>
                <img src={img_src} alt='movie_poster'/>
                
                <p> {selected.overview} </p>
                </div>
                <button className={classes.close} onClick={closeMovieDetails}> Close </button>
           </div>
       </section>
    )
};

export default MovieDetails;