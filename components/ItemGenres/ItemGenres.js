import React from 'react';
import injectSheet from 'react-jss';

const ItemGenres = ({ genres, classes }) => (
    <div className={classes.itemGenres}>{genres.join(', ')}</div>
);

const styles = {
    // .itemGenres
    itemGenres: {
        display: 'block',
        color: 'grey',
        fontSize: '8px',
        fontWeight: 'normal',
        textTransform: 'capitalize'
    }
};

const StyledItemGenres = injectSheet(styles)(ItemGenres);

export default StyledItemGenres;
