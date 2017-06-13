import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { fetchUserRepo, fetchRepo, fetchReadme } from '../actions/actions';

class Repo extends Component {

    componentWillMount () {
        this.props.fetchReadme (this.props.params.user, this.props.params.repo);
        this.props.fetchUserRepo (this.props.params.user, this.props.params.repo);
    }

    render () {
        return (
            <div className="repo">

                <header className="card-header">
                    <div className="card-info">
                        <a className="card-name">{this.props.repo.full_name}</a>
                        <p className="card-description">{this.props.repo.description}</p>
                    </div>
                </header>

                <div className="card-content">
                    <div>
                        <p>{this.checkLanguage(this.props.repo.language)}</p>
                        <ul className="repo-stats">
                            <li className=""><p>Issues: {this.props.repo.open_issues_count}</p></li>
                            <li className=""><p>Watchers: {this.props.repo.subscribers_count}</p></li>
                            <li className=""><p>Forks: {this.props.repo.forks_count}</p></li>
                            <li className=""><p>Stars: {this.props.repo.stargazers_count}</p></li>
                        </ul>
                    </div>
                </div>
                <div className="card-content">
                    <div>
                        <ReactMarkdown 
                            className="repo-info"
                            source={this.props.readmeInfo.readme}/>
                    </div>
                </div>
            </div>
        );
    }

    checkLanguage (language) {
        if (language) return (
            <span>Language used: {this.props.repo.language}</span>
        );
    }

}

Repo.propTypes = {
    repo: PropTypes.object,
    fetchUserRepo: PropTypes.func,
    fetchReadme: PropTypes.func,
    params: PropTypes.object,
    readmeInfo: PropTypes.object
};

function mapStateToProps (state) {
    return {
        repo: state.repos.repo,
        loading: state.repos.loading,
        error: state.repos.error,
        repos: state.repos.repos.item, 
        readmeInfo: state.readme
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchUserRepo: (user, repo) => {
            dispatch (fetchUserRepo (user, repo));
        },
        fetchRepo: (event) => {
            dispatch (fetchRepo (event));
        },
        fetchReadme: (user, repo) => {
            dispatch (fetchReadme (user, repo));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Repo);
