import React from 'react';
import injectSheet from 'react-jss';

const ItemTitle = ({ title, classes }) => (
    <div className={classes.itemTitle}>{title}</div>
);

const styles = {
    // .itemTitle
    itemTitle: {
        display: 'inline-block',
        color: 'black',
        fontSize: '11px',
        fontWeight: 'bold',
        background: 'transparent',
        textTransform: 'uppercase',
        marginRight: '24px'
    }
};

const StyledItemTitle = injectSheet(styles)(ItemTitle);

export default StyledItemTitle;
