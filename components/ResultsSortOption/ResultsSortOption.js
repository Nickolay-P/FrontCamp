import React from 'react';
import injectSheet from 'react-jss';

const ResultsSortOption = ({ customClass, title, onClick, classes }) => (
    <button
        type="button"
        className={classes[customClass] || classes.button}
        onClick={onClick}
    >
        {title}
    </button>
);

const styles = {
    // .button
    button: {
        display: 'inline-block',
        marginLeft: '10px',
        color: 'black',
        border: 'none',
        padding: '4px 10px',
        fontSize: '12px',
        fontWeight: 'bold',
        background: 'transparent',
        cursor: 'pointer'
    },
    // .buttonChecked
    buttonChecked: {
        extend: 'button',
        color: '#f55263'
    }
};

const StyledResultsSortOption = injectSheet(styles)(ResultsSortOption);

export default StyledResultsSortOption;
