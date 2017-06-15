import axios from 'axios';

import * as types from './types';

export function fetchRepoRequest () {
    return {
        type: types.FETCH_REPO_REQUEST
    };
}

export function fetchRepoSuccess (data) {
    return {
        type: types.FETCH_REPO_SUCCESS,
        data
    };
}

export function fetchRepoError (error) {
    return {
        type: types.FETCH_REPO_ERROR,
        error
    };
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

export function fetchUserRepoRequest () {
    return {
        type: types.FETCH_USER_REPO_REQUEST
    };
}

export function fetchUserRepoSuccess (data) {
    return {
        type: types.FETCH_USER_REPO_SUCCESS,
        data
    };
}

export function fetchUserRepoError (error) {
    return {
        type: types.FETCH_USER_REPO_ERROR,
        error
    };
}

export function fetchUserRepo (userRepo, repoName) {

    return dispatch => {
        dispatch (fetchUserRepoRequest ());
            axios
                .get (`https://api.github.com/repos/${userRepo}/${repoName}`)
                .then (res => {
                    dispatch (fetchUserRepoSuccess (res.data));
                })
                .catch (error => {
                    dispatch (fetchUserRepoError (error.message));
                });
    };
}

export function fetchReadmeRequest () {
    return {
        type: types.FETCH_README_REQUEST
    };
}

export function fetchReadmeSuccess (readme) {
    return {
        type: types.FETCH_README_SUCCESS,
        readme
    };
}

export function fetchReadmeError (error) {
    return {
        type: types.FETCH_README_ERROR,
        error
    };
}

export function fetchReadme (userRepo, repoName) {

    return dispatch => {
        dispatch (fetchReadmeRequest ());
            axios
                .get (`https://api.github.com/repos/${userRepo}/${repoName}/readme`)
                .then (res => {    
                    dispatch (fetchReadmeSuccess (res.data));
                })
                .catch (error => {
                    dispatch (fetchReadmeError (error.message));
                });
    };
}
