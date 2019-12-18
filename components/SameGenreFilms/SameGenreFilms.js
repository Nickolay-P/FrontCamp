import React from 'react';
import ResultsBody from '../ResultsBody';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const SameGenreFilms = ({ films, filmGenre, openFilmHandler, classes }) => {
    if (!films.length) {
        return (
            <main className={classes.results}>
                <div className={classes.resultsHeading} />
                <div className={classes.resultsError}>No films found</div>
            </main>
        );
    }

    return (
        <main className={classes.results}>
            <div className={classes.resultsHeadingMore}>
                More films by <span>{filmGenre}</span> genre
            </div>
            <ResultsBody results={films} openFilmHandler={openFilmHandler} />
        </main>
    );
};

SameGenreFilms.propTypes = {
    films: PropTypes.array,
    filmGenre: PropTypes.string,
    openFilmHandler: PropTypes.func
};

SameGenreFilms.defaultProps = {
    films: [],
    filmGenre: ''
};

const styles = {
    // .results
    results: {
        background: 'white',
        width: '100%'
    },
    // .resultsHeading
    resultsHeading: {
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '36px',
        background: '#f5f5f5',
        padding: '10px 50px',
        fontSize: '12px'
    },
    // .resultsHeadingMore
    resultsHeadingMore: {
        display: 'block',
        minHeight: '36px',
        background: '#f5f5f5',
        padding: '10px 50px',
        fontSize: '12px',

        '& span': {
            fontWeight: 'bold'
        }
    },
    // .resultsError
    resultsError: {
        padding: '30px 0 50px',
        fontSize: '1.6rem',
        textAlign: 'center'
    }
};

const StyledSameGenreFilms = injectSheet(styles)(SameGenreFilms);

export default StyledSameGenreFilms;
