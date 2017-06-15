import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchRepo } from '../actions/actions';
import RepoList from './RepoList';

class FrontPage extends Component {
    
    render () {
        return (
            <div>
                <div>
                <RepoList 
                    loading={this.props.loading}
                    repos={this.props.repos}
                    handleClick={this.handleClick}
                />
                </div>
            </div>
        );
    }
}

FrontPage.propTypes = {
    loading: PropTypes.bool,
    repos: PropTypes.object
};

function mapStateToProps (state) {
    return {
        loading: state.repos.loading,
        error: state.repos.error,
        repos: state.repos.repos
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchRepo: (event) => {
            dispatch(fetchRepo(event));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (FrontPage);
