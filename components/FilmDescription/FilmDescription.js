import React from 'react';
import injectSheet from 'react-jss';

const FilmDescription = ({ description, classes }) => (
    <div className={classes.filmDescription}>
        {description}
    </div>
);

const styles = {
    // .filmDescription
    filmDescription: {
        display: 'block',
        fontSize: '14px',
        fontWeight: 'normal',
        color: 'white'
    }
};

const StyledFilmDescription = injectSheet(styles)(FilmDescription);

export default StyledFilmDescription;
