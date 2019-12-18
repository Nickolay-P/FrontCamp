import React from 'react';
import injectSheet from 'react-jss';

const ItemReleaseDate = ({ releaseDate, classes }) => (
    <div className={classes.itemReleaseDate}>{releaseDate.slice(0, 4)}</div>
);

const styles = {
    // .itemReleaseDate
    itemReleaseDate: {
        position: 'absolute',
        top: '4px',
        right: '0px',
        display: 'inline-block',
        color: 'gray',
        padding: '1px 3px',
        border: '1px solid lightgray',
        borderRadius: '3px',
        fontSize: '8px',
        fontWeight: 'bold',
        background: 'transparent',
        textTransform: 'uppercase'
    }
};

const StyledItemReleaseDate = injectSheet(styles)(ItemReleaseDate);

export default StyledItemReleaseDate;
