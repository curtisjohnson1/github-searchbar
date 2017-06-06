import axios from 'axios';

import * as types from './types';

export function fetchRepoRequest () {
    return {
        type: types.FETCH_REPO_REQUEST
    }
}

export function fetchRepoSuccess (repo) {
    return {
        type: types.FETCH_REPO_SUCCESS,
        repo
    }
}

export function fetchRepoError (error) {
    return {
        type: types.FETCH_REPO_ERROR,
        error
    }
}

export function fetchRepo (wordSearch) {

    return dispatch => {
        dispatch (fetchRepoRequest ());
            axios
                .get (`https://api.github.com/search/repositories?q=${wordSearch}`)
                .then (res => {
                    dispatch (fetchRepoSuccess (res.data));
                })
                .catch (error => {
                    dispatch (fetchRepoError (error));
                });
    };
}