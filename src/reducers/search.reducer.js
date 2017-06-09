import * as types from '../actions/types';

const initialState = {
    repos: [],
    repo: {},
    loading: false,
    error: null
};

export default function (prevState = initialState, action) {

    switch (action.type) {

        case types.FETCH_REPO_REQUEST:
        case types.FETCH_USER_REPO_REQUEST:
            return Object.assign({}, prevState, {
                loading: true,
                error: null
            });

        case types.FETCH_REPO_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                repos: action.data
            });
        
        case types.FETCH_USER_REPO_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                repo: action.data
            });
        
        case types.FETCH_REPO_ERROR:
        case types.FETCH_USER_REPO_ERROR:
            return Object.assign({}, prevState, {
                loading: false,
                error: action.error
            });

        default:
            return prevState;
    }
}