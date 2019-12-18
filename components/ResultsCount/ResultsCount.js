import React from 'react';
import injectSheet from 'react-jss';

const ResultsСount = ({ count, classes }) => {
    if (count === 0) {
        return <span />;
    }

    return <span className={classes.resultsCount}>{count} movies found</span>;
};

const styles = {
    // .resultsCount
    resultsCount: {
        color: 'black',
        fontWeight: 'bold',
        lineHeight: '1.8'
    }
};

const StyledResultsCount = injectSheet(styles)(ResultsСount);

export default StyledResultsCount;
