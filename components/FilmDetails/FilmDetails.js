import React from 'react';
import Logo from '../Logo';
import Button from '../Button';
import FilmPoster from '../FilmPoster';
import FilmTitle from '../FilmTitle';
import FilmRating from '../FilmRating';
import FilmGenres from '../FilmGenres';
import FilmDurationAndYear from '../FilmDurationAndYear';
import FilmDescription from '../FilmDescription';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const FilmDetails = ({ film, closeFilmHandler, classes }) => (
    <header className={classes.header}>
        <Logo />
        <Button
            onClick={closeFilmHandler}
            title="SEARCH"
            customClass="buttonBack"
        />
        <div className={classes.filmDetails}>
            <div className={classes.filmPoster}>
                <FilmPoster src={film.poster_path} alt={film.title} />
            </div>
            <div className={classes.filmDescriptionWrapper}>
                <FilmTitle title={film.title} />
                <FilmRating rating={film.vote_count} />
                <FilmGenres genres={film.genres} />
                <FilmDurationAndYear
                    duration={99}
                    year={film.release_date.slice(0, 4)}
                />
                <FilmDescription description={film.overview} />
            </div>
        </div>
    </header>
);

FilmDetails.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        genres: PropTypes.array,
        year: PropTypes.number,
        rating: PropTypes.number,
        duration: PropTypes.number,
        summary: PropTypes.string
    })
};

const styles = {
    // .header
    header: {
        background: '#212125',
        backgroundImage: "url("+"http://s1.1zoom.me/b5050/396/Fantastic_world_445211_2048x1152.jpg"+")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: 'black',
        padding: '0 50px'
    },
    // .filmDetails
    filmDetails: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        minHeight: '300px',
        padding: '20px 0 40px'
    },
    // .filmDescriptionWrapper
    filmDescriptionWrapper: {
        marginLeft: '40px',
        padding: '40px 0'
    }
};

const StyledFilmDetails = injectSheet(styles)(FilmDetails);

export default StyledFilmDetails;
