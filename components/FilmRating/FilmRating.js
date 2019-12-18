import React from 'react';
import injectSheet from 'react-jss';

const FilmRating = ({ rating, classes }) => (
    <span className={classes.filmRating}>{rating}</span>
);

const styles = {
    filmRating: {
        position: 'relative',
        display: 'inline-block',
        fontSize: '14px',
        fontWeight: '400',
        color: 'white',
        width: '30px',
        height: '30px',
        textAlign: 'center',
        margin: '0 6px',

        '&:before': {
            position: 'absolute',
            content: '""',
            border: '1px solid white',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            top: '-6px',
            left: '-1px'
        }
    }
};

const StyledFilmRatint = injectSheet(styles)(FilmRating);

export default StyledFilmRatint;
