import React from 'react';
import injectSheet from 'react-jss';

const FilmGenres = ({ genres, classes }) => (
    <span className={classes.filmGenres}>
        {genres.join(', ')}
    </span>
);

const styles = {
    // .filmGenres
    filmGenres: {
        display: 'block',
        fontSize: '15px',
        fontWeight: 'normal',
        color: 'white',
        textTransform: 'capitalize'
    }
};

const StyledFilmGenres = injectSheet(styles)(FilmGenres);

export default StyledFilmGenres;
