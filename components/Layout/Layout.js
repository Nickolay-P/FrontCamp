import Footer from '../Footer';
import injectSheet from 'react-jss';

const Layout = ({ children }) => (
    <div>
        {children}
        <Footer />
    </div>
);

const styles = {
    '@global': {
        // body
        body: {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: '16px',
            margin: '0',
            padding: '0',
            width: '100%',
            minWidth: '680px',
            '& *': { boxSizing: 'border-box' }
        }
    }
};

const StyledLayout = injectSheet(styles)(Layout);

export default StyledLayout;
