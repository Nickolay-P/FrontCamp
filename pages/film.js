import { Router } from '../routes';
import Error from './error'
import Layout from '../components/Layout';
import FilmDetails from '../components/FilmDetails';
import SameGenreFilms from '../components/SameGenreFilms';
import { connect } from 'react-redux';
import { getResults } from '../actions/resultsActions';
import { openFilm } from '../actions/navigationActions';

const Film = ({ results, navigation }) => {
    const allFilms = results.films;
    const openedFilmId = Number(navigation.openedFilmId);
    const openedFilmData = allFilms.find(({ id }) => id === openedFilmId);

    if (typeof openedFilmData === 'undefined' || openedFilmData === null) {
        return (<Error />);
    } else {
        const openedFilmGenre = openedFilmData.genres[0];
        const sameGenreFilms = allFilms.filter(({ genres }) =>
            genres.includes(openedFilmGenre)
        );
        const openFilmHandler = id => {
            Router.pushRoute(`/film/${id}`);
        };
        const closeFilmHandler = () => {
            Router.pushRoute(`/search`);
        };

        return (
            <Layout>
                <FilmDetails
                    film={openedFilmData}
                    closeFilmHandler={closeFilmHandler}
                />
                <SameGenreFilms
                    films={sameGenreFilms}
                    filmGenre={openedFilmGenre}
                    openFilmHandler={openFilmHandler}
                />
            </Layout>
        );
    }

};

Film.getInitialProps = async function (ctx) {
    const { id } = ctx.query;
    const { results } = await ctx.store.dispatch(getResults());
    const { navigation } = ctx.store.dispatch(openFilm(id));

    return { results, navigation };
};

const mapStateToProps = state => ({
    navigation: state.navigation,
    results: state.results,
    search: state.search
});

export default connect(mapStateToProps)(Film);
