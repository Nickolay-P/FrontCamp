import React from 'react';
import injectSheet from 'react-jss';

const ItemImage = ({ img, title }) => (
    <img className="itemImage" src={img} alt={title} />
);

const styles = {
    // .itemImage
    '@global': {
        '.itemImage': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '140px',
            height: 'auto',
            maxHeight: '205px',
            background: 'gray'
        }
    }
};

const StyledItemGenres = injectSheet(styles)(ItemImage);

export default StyledItemGenres;
