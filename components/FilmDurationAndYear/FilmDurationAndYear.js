import React from 'react';
import injectSheet from 'react-jss';

const FilmDurationAndYear = ({ duration, year, classes }) => (
    <div className={classes.filmDurationAndYear}>
        <span className={classes.filmDuration}>{duration} min</span>
        <span className={classes.filmYear}>{year}</span>
    </div>
);

const styles = {
    // .filmDurationAndYear
    filmDurationAndYear: {
        margin: '12px 0 24px',
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'white'
    },
    // .filmDuration
    filmDuration: {
        marginRight: '20px'
    },
    // .filmYear
    filmYear: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'white',
        margin: '15px 0'
    }
};

const StyledFilmDurationAndYear = injectSheet(styles)(FilmDurationAndYear);

export default StyledFilmDurationAndYear;
