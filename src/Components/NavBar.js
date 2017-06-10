import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { fetchRepo } from '../actions/actions';

class NavBar extends Component {
    constructor (props) {
        super (props);

        this.state = {
            input: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render () {
        return (
            <nav className="github-nav">
                <input
                    className="github-search" 
                    type="text"
                    placeholder="Search"
                    value={this.state.input}
                    onChange={this.handleInput}
                />
                <button 
                    onClick={this.handleSubmit}
                >
                Submit
                </button>
                <span>
                    <span><Link to={'/'}>Home</Link></span>
                </span>
                    <p classID="nav-header">GitHub SearchBar</p>
            </nav>
        );
    }

    handleInput (event) {
        this.setState ({
            input: event.target.value
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.fetchRepo(this.state.input);
        this.setState({ input: '' });
    }
}

NavBar.propTypes = {
    fetchRepo: PropTypes.func
};

function mapStateToProps (state) {
    return {
        loading: state.repos.loading,
        error: state.repos.error,
        repos: state.repos.repos.items
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchRepo: (event) => {
            dispatch(fetchRepo(event));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);
