import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUserRepo, fetchRepo } from '../actions/actions';

class Repo extends Component {

    componentDidMount () {
        this.props.fetchUserRepo (this.props.params.user, this.props.params.repo);
    }

    render () {
        return (
            <div className="card">

                <header className="card-header">
                    <h1>{this.props.repo.full_name}</h1>
                </header>

                <div className="card-content">
                    <div className="content">
                        <h5>{this.props.repo.description}</h5>
                        <h5>{this.props.repo.language}</h5>
                        <li>Issues: {this.props.repo.open_issues_count}</li>
                        <li>Watchers: {this.props.repo.subscribers_count}</li>
                        <li>Forks: {this.props.repo.forks_count}</li>
                        <li>Stars: {this.props.repo.stargazers_count}</li>
                    </div>
                </div>
            </div>
        );
    }
}

Repo.propTypes = {
    repo: PropTypes.object,
    fetchUserRepo: PropTypes.func,
    params: PropTypes.object
};

function mapStateToProps (state) {
    return {
        repo: state.repos.repo,
        loading: state.repos.loading,
        error: state.repos.error,
        repos: state.repos.repos.item
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchUserRepo: (user, repo) => {
            dispatch (fetchUserRepo (user, repo));
        },
        fetchRepo: (event) => {
            dispatch (fetchRepo (event));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Repo);
