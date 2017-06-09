import React from 'react';
import PropTypes from 'prop-types';

import RepoCard from './RepoCard';

const RepoList = (props) => {
    return (
        <div>
            {generateRepoCards(props.repos)}
        </div>
    );


};

const generateRepoCards = (repos) => {
    if (!repos) return <div>Please search for a repo...</div> ;

    return repos.map((repo, i) => {
        return (
            <RepoCard key={i} {...repo} />
        );
    });
};

RepoList.propTypes = {
    repos: PropTypes.array
};

export default RepoList;
