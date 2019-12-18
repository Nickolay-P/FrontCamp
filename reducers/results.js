import { GET_RESULTS } from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_RESULTS:
            return { ...state, films: action.payload.films };

        default:
            return state;
    }
};
