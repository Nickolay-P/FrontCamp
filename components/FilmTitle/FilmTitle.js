import React from 'react';
import injectSheet from 'react-jss';

const FilmTitle = ({ title, classes }) => (
    <span className={classes.filmTitle}>{title}</span>
);

const styles = {
    filmTitle: {
        fontSize: '26px',
        fontWeight: '500',
        color: '#f55263'
    }
};

const StyledFilmTitle = injectSheet(styles)(FilmTitle);

export default StyledFilmTitle;
