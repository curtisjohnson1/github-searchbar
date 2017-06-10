import { expect } from 'chai';
import reducer from '../src/reducers/search.reducer';
import * as actions from '../src/actions/actions';

describe('reducer', () => {

    it('handles a fetchRepoRequest action', () => {
        const initialState = {
            loading: false,
            error: null
        };

        const expected = {
            loading: true,
            error: null
        };

        const input = reducer(initialState, actions.fetchRepoRequest());

        expect(input).to.eql(expected);
    });

    it('handles a fetchRepoSuccess action', () => {
        const initialState = {
            loading: true,
            repos: []
        };

        const expected = {
            loading: false, 
            repos: [{name: 'found a repo', forks: 25}, {name: 'found another repo'}]
        };

        const repoArray = [{name: 'found a repo', forks: 25}, {name: 'found another repo'}];

        const input = reducer(initialState, actions.fetchRepoSuccess(repoArray));

        expect(input).to.eql(expected);
    });

    it('handles a fetchRepoError action', () => {
        const initialState = {
            loading: true,
            error: null
        };

        const expected = {
            loading: false, 
            error: 'error message'
        };

        const input = reducer(initialState, actions.fetchRepoError('error message'));

        expect(input).to.eql(expected);
    });

    it('ensures that fetchRepo repo does not mutate state', () => {
        const initialState = {
            loading: false,
            repo: {},
            repos: {},
            error: null
        };

        const expected = {
            loading: true,
            repo: {},
            repos: {},
            error: null
        };

        const input = reducer(initialState, actions.fetchRepoRequest());

        expect(input).to.not.equal(expected);
    });

    it('handles a fetchUserRepoSuccess action', () => {
        const initialState = {
            loading: true,
            repo: {}
        };

        const expected = {
            loading: false, 
            repo: {name: 'this is a repo', forks: 25, stars: 17}
        };

        const repoObject = {name: 'this is a repo', forks: 25, stars: 17};

        const input = reducer(initialState, actions.fetchUserRepoSuccess(repoObject));

        expect(input).to.eql(expected);
    });

    it('ensures that fetchUserRepo reducer does not mutate state', () => {
        const initialState = {
            loading: false,
            repo: {},
            repos: {},
            error: null
        };

        const expected = {
            loading: true,
            repo: {},
            repos: {},
            error: null
        };

        const input = reducer(initialState, actions.fetchUserRepoRequest());

        expect(input).to.not.equal(expected);
    });

});