import React from 'react';
import injectSheet from 'react-jss';

const Button = ({ customClass, title, onClick, classes }) => (
    <button
        type='button'
        className={classes[customClass] || classes['button']}
        onClick={onClick}
    >
        {title}
    </button>
);

const styles = {
    // .button
    button: {
        display: 'inline-block',
        marginRight: '10px',
        borderRadius: '3px',
        color: 'white',
        background: '#3d3c3a',
        border: 'none',
        padding: '4px 20px',
        fontSize: '10px',
        textTransform: 'uppercase',
        fontWeight: '600',
        lineHeight: '1.5',
        cursor: 'pointer'
    },
    // .buttonChecked
    buttonChecked: {
        extend: 'button',
        background: '#f55263'
    },
    // .buttonInverted
    buttonInverted: {
        extend: 'button',
        color: '#f55263',
        background: 'white'
    },
    // .buttonAction
    buttonAction: {
        extend: 'button',
        padding: '10px 80px',
        background: '#f55263',
        border: 'none',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '600',
        color: 'white',
        textTransform: 'uppercase',
        marginLeft: 'auto'
    },
    // .buttonBack
    buttonBack: {
        extend: 'button',
        position: 'absolute',
        top: '12px',
        right: '30px',
        padding: '2px 10px',
        background: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: '500',
        color: '#f55263',
        textTransform: 'uppercase'
    }
};

const StyledButton = injectSheet(styles)(Button);

export default StyledButton;
