import { combineReducers } from 'redux';

import navigation from './navigation';
import search from './search';
import sort from './sort';
import results from './results';

export default combineReducers({
    navigation,
    search,
    sort,
    results
});
