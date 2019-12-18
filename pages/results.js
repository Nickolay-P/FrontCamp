import { Router } from '../routes';
import Layout from '../components/Layout';
import ResultsDefault from '../components/ResultsDefault';
import SearchForm from '../components/SearchForm';
import { connect } from 'react-redux';
import { getResults } from '../actions/resultsActions';
import { changeSearchString } from '../actions/searchActions';

const Results = ({ results, search, sort }) => {
    const titleFilterer = film =>
        film.title.toUpperCase().includes(search.searchString.toUpperCase());
    const genreFilterer = film =>
        (film.genres[0] || '')
            .toUpperCase()
            .includes(search.searchString.toUpperCase());

    const filterers = {
        title: titleFilterer,
        genre: genreFilterer
    };
    const searchCriteria = search.searchCriteria;
    const sortCriteria = sort.sortCriteria;
    const getSorterByCriteria = criteria => (a, b) => a[criteria] - b[criteria];
    const filmsFiltered = results.films.filter(filterers[searchCriteria]);
    const filmsFilteredAndSorted = filmsFiltered.sort(
        getSorterByCriteria(sortCriteria)
    );
    const openFilmHandler = id => {
        Router.pushRoute(`/film/${id}`);
    };

    return (
        <Layout>
            <SearchForm />
            <ResultsDefault
                results={filmsFilteredAndSorted}
                openFilmHandler={openFilmHandler}
            />
        </Layout>
    );
};

Results.getInitialProps = async function(ctx) {
    const { searchString = '' } = ctx.query;
    const { results } = await ctx.store.dispatch(getResults());
    const { search } = ctx.store.dispatch(changeSearchString(searchString));

    return { results, search };
};

const mapStateToProps = state => ({
    results: state.results,
    search: state.search,
    sort: state.sort
});

export default connect(mapStateToProps)(Results);
