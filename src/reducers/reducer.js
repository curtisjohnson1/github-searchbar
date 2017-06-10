import { combineReducers } from 'redux';

import searchReducer from './search.reducer';
import repoReducer from './repo.reducer';

export default combineReducers({
    repos: searchReducer,
    readme: repoReducer
});