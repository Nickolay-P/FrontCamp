import React from 'react';
import ResultsItem from '../ResultsItem';
import injectSheet from 'react-jss';

const ResultsBody = ({ results, openFilmHandler, classes }) => {
    const resultsItems = results.map(film => (
        <ResultsItem key={film.id} data={film} onClick={openFilmHandler} />
    ));

    return <div className={classes.resultsBody}>{resultsItems}</div>;
};

const styles = {
    resultsBody: {
        background: 'white',
        width: 'calc(100% - 100px)',
        margin: '0 50px',
        textAlign: 'left'
    }
};

const StyledResultsBody = injectSheet(styles)(ResultsBody);

export default StyledResultsBody;
