import { FILM_OPENED, FILM_CLOSED } from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case FILM_OPENED:
        case FILM_CLOSED:
            return { ...state, openedFilmId: action.payload };

        default:
            return state;
    }
};
