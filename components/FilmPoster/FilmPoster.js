import React from 'react';
import injectSheet from 'react-jss';

const FilmPoster = ({ src, alt, classes }) => (
    <img className={classes.filmPoster} src={src} alt={alt} />
);

const styles = {
    filmPoster: {
        width: '200px',
        height: 'auto',
        maxHeight: '350px'
    }
};

const StyledFilimPoster = injectSheet(styles)(FilmPoster);

export default StyledFilimPoster;
