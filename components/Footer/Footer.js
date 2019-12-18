import React from 'react';
import Logo from '../Logo';
import injectSheet from 'react-jss';

const Footer = ({ classes }) => (
    <footer className={classes.footer}>
        <Logo />
    </footer>
);

const styles = {
    footer: {
        background: '#414141',
        padding: '0 50px'
    }
};

const StyledFooter = injectSheet(styles)(Footer);

export default StyledFooter;
