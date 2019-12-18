import React from 'react';
import injectSheet from 'react-jss';

const Logo = ({ classes }) => (
    <div className={classes.logo}>NetflixRoulette</div>
);

const styles = {
    logo: {
        color: '#f55263',
        padding: '10px 0',
        fontSize: '12px',
        textTransform: 'lowercase',
        fontSize: '12px',
        fontWeight: '600'
    }
};

const StyledLogo = injectSheet(styles)(Logo);

export default StyledLogo;
