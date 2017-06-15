import * as types from '../actions/types';

const initialState = {
    readme: '',
    readmeDetails: {},
    loading: false,
    error: null
};

export default function (prevState = initialState, action) {

    switch (action.type) {
        
        case types.FETCH_README_REQUEST:
            return Object.assign({}, prevState, {
                loading: true,
                error: null
            });
        
        case types.FETCH_README_SUCCESS: {
            const decodeReadme = Buffer.from(action.readme.content, action.readme.encoding).toString();
            return Object.assign({}, prevState, {
                loading: false,
                readmeDetails: action.readme,
                readme: decodeReadme
            });
        }

        case types.FETCH_README_ERROR:
            return Object.assign({}, prevState, {
                loading: false,
                error: action.error
            });
        
        default:
            return prevState;
    }
}