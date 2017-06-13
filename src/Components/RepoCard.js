import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import moment from 'moment';

class RepoCard extends Component {

    render () {
        const [user, repo] = this.props.full_name.split('/');

        return (
            <div className="repo-card">
            
                <div className="repo-card-info">
                    <Link className='repo-name' to={`/repos/${user}/${repo}`}>{this.props.full_name}</Link>
                    <p>{this.props.description}</p>
                    <p>Updated on {this.getDate(this.props.updated_at)}</p>
                </div>
                <div className="repo-card-language">
                    <p>{this.props.language}</p>
                </div>
                <div className="repo-card-stars">
                    <p>{this.props.stargazers_count}</p>
                </div>
            </div>
        );
    }

    getDate (num) {
        let date = moment(num);
        return date.format('Do MMM YYYY');
    }
}

RepoCard.propTypes = {
    full_name: PropTypes.string,
    language: PropTypes.string,
    description: PropTypes.string,
    updated_at: PropTypes.string
};

export default RepoCard;
