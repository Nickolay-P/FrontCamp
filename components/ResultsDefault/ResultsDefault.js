import React from 'react';
import ResultsCount from '../ResultsCount';
import ResultsBody from '../ResultsBody';
import ResultsSort from '../ResultsSort';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

class ResultsDefault extends React.Component {
    render() {
        const {
            results,
            openFilmHandler,
            error,
            loading,
            classes
        } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!results.length) {
            return (
                <main className={classes.results}>
                    <div className={classes.resultsHeading} />
                    <div className={classes.resultsError}>No films found</div>
                </main>
            );
        }

        return (
            <main className={classes.results}>
                <div className={classes.resultsHeading}>
                    <ResultsCount count={results.length} />
                    <ResultsSort />
                </div>
                <ResultsBody
                    results={results}
                    openFilmHandler={openFilmHandler}
                />
            </main>
        );
    }
}

ResultsDefault.propTypes = {
    results: PropTypes.array,
    error: PropTypes.object,
    loading: PropTypes.bool,
    openFilmHandler: PropTypes.func
};

ResultsDefault.defaultProps = {
    results: [],
    error: null,
    loading: false
};

const styles = {
    // .results
    results: {
        background: 'white',
        width: '100%'
    },
    // .resultsError
    resultsError: {
        padding: '30px 0 50px',
        fontSize: '1.6rem',
        textAlign: 'center'
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
        fontSize: '12px'
    },
    // span
    spanElement: {
        fontWeight: 'bold'
    }
};

const StyledResultsDefault = injectSheet(styles)(ResultsDefault);

export default StyledResultsDefault;
