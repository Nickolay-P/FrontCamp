import React from 'react';
import { connect } from 'react-redux';
import ResultsSortList from '../ResultsSortList';
import { SORT_OPTIONS } from '../../constants';
import { changeSort } from '../../actions/sortActions';
import injectSheet from 'react-jss';

const ResultsSort = ({ currentSortCriteria, changeSortHanler, classes }) => (
    <span>
        <span className={classes.resultsSort}>Sort by:</span>
        <ResultsSortList
            options={SORT_OPTIONS}
            currentOption={currentSortCriteria}
            changeHandler={changeSortHanler}
        />
    </span>
);

const mapStateToProps = ({ sort }) => ({
    currentSortCriteria: sort.currentSortCriteria
});

const mapDispatchToProps = dispatch => ({
    changeSortHanler: sortCriteria => dispatch(changeSort(sortCriteria))
});

const styles = {
    // .resultsSort
    resultsSort: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '12px'
    }
};

const StyledResultsSort = injectSheet(styles)(ResultsSort);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StyledResultsSort);
