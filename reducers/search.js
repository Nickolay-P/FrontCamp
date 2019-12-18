import { SEARCH_OPTIONS } from '../constants';
import { SEARCH_CRITERIA_CHANGE, SEARCH_STRING_CHANGE } from '../constants/actionTypes';

const initialState = {
    searchCriteria: SEARCH_OPTIONS[0],
    searchString: ''
};

export default function search(state = initialState, action) {
    switch(action.type) {
        case SEARCH_CRITERIA_CHANGE:
            return {
                ...state,
                searchCriteria: action.payload
            };

        case SEARCH_STRING_CHANGE:
            return {
                ...state,
                searchString: action.payload
            };

        default:
            return state;
    }
}
