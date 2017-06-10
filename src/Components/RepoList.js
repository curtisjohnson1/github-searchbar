import React from 'react';
import PropTypes from 'prop-types';

import RepoCard from './RepoCard';

const RepoList = (props) => {
    return (
        <div>
            {repoCount(props.repos.total_count)}
            {generateRepoCards(props.repos.items)}
        </div>
    );
};

const generateRepoCards = (repos) => {
    if (!repos) return (
        <div>
            <h1>Please search for a repo...</h1>
        </div>
    );

    return repos.map((repo, i) => {
        return (
            <RepoCard key={i} {...repo} />
        );
    });
};

const repoCount = (count) => {
    if (count) return (
        <div className="count-header">
            <h4>{count} repositories found</h4>
        </div>
    );
};

RepoList.propTypes = {
    repos: PropTypes.object
};

export default RepoList;
