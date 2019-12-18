import React from 'react';
import SearchCriteriasList from '../SearchCriteriasList';
import Button from '../Button';
import injectSheet from 'react-jss';

const SearchFilter = ({
    options,
    currentOption,
    changeCriteriaHandler,
    submitValueHandler,
    classes
}) => (
    <div className={classes.searchFilter}>
        <span>Search by </span>
        <SearchCriteriasList
            options={options}
            currentOption={currentOption}
            changeHandler={changeCriteriaHandler}
        />
        <Button
            title="Search"
            customClass="buttonAction"
            onClick={submitValueHandler}
        />
    </div>
);

const styles = {
    // .searchFilter
    searchFilter: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px 0',

        '& span': {
            fontSize: '10px',
            textTransform: 'uppercase',
            marginRight: '10px'
        }
    }
};

const StyledSearchFilter = injectSheet(styles)(SearchFilter);

export default StyledSearchFilter;
