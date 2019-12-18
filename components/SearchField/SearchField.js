import React from 'react';
import injectSheet from 'react-jss';

const SearchField = ({ value, onChange, classes }) => {
    return (
        <input
            type="text"
            className={classes.searchField}
            onChange={onChange}
            value={value}
            autoFocus
        />
    );
};

const styles = {
    // .searchField
    searchField: {
        display: 'block',
        width: '100%',
        background: 'black',
        color: 'white',
        fontSize: '1.2rem',
        padding: '10px',
        border: 'none',
        borderBottom: '1px solid #f55263'
    }
};

const StyledSearchField = injectSheet(styles)(SearchField);

export default StyledSearchField;
