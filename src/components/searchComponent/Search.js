import React from 'react';
import classes from '../searchComponent/Search.module.css';

const Search = ({handleInputVal, search}) => {
        return(
          <div className={classes.searchInputWrap}>
              <input 
                    type='text' 
                    placeholder='Search with a keyword...' 
                    className={classes.searchInput} 
                    onChange={handleInputVal} 
                    onKeyPress={search}
              />
          </div>
        )
};

export default Search;