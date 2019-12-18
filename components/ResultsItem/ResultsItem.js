import React from 'react';
import ItemImage from '../ItemImage';
import ItemTitle from '../ItemTitle';
import ItemReleaseDate from '../ItemReleaseDate';
import ItemGenres from '../ItemGenres';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const ResultsItem = ({ data, onClick }) => (
    <div
        id={'results-item-' + data.id}
        className="resultsItem"
        onClick={() => onClick(data.id)}
    >
        <ItemImage img={data.poster_path} title={data.title} />
        <div className="resultsItemWording">
            <ItemTitle title={data.title} />
            <ItemReleaseDate releaseDate={data.release_date} />
            <ItemGenres genres={data.genres} />
        </div>
    </div>
);

ResultsItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        poster_path: PropTypes.string,
        title: PropTypes.string,
        genres: PropTypes.array,
        releaseDate: PropTypes.string
    }),
    onClick: PropTypes.func
};

const styles = {
    // .resultsItem
    '@global': {
        '.resultsItem': {
            overflow: 'hidden',
            position: 'relative',
            display: 'inline-block',
            color: 'black',
            border: '1px solid lightgrey',
            padding: '3px',
            margin: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            background: 'transparent',
            width: '140px',
            minHeight: '260px',
            borderRadius: '3px',
            verticalAlign: 'top',
            textAlign: 'left',
            cursor: 'pointer'
        },
        // .resultsItemWording
        '.resultsItemWording': {
            position: 'relative',
            marginTop: '200px',
            padding: '3px'
        }
    }
};

const StyledResultsItem = injectSheet(styles)(ResultsItem);

export default StyledResultsItem;
