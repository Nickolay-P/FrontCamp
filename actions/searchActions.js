import {
    SEARCH_CRITERIA_CHANGE,
    SEARCH_STRING_CHANGE
} from '../constants/actionTypes';

export const changeSearchCriteria = searchCriteria => ({
    type: SEARCH_CRITERIA_CHANGE,
    payload: searchCriteria
});

export const changeSearchString = searchString => ({
    type: SEARCH_STRING_CHANGE,
    payload: searchString
});
