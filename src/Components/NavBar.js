import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import PropTypes from 'prop-types';

import { fetchRepo } from '../actions/actions';
import logo from '../../public/d53-logo.svg';

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
                <div className="nav-container">
                    <Link to={'/'}><img className="logo" src={logo}/></Link>
                    <form
                        onSubmit={this.handleSubmit} 
                        className="searchbar">
                    <input
                        className="github-search" 
                        type="text"
                        placeholder="Search GitHub"
                        value={this.state.input}
                        onChange={this.handleInput}
                    />                    
                    </form>
                    <p>Pull Requests</p>
                    <p>Issues</p>
                    <p>Marketplace</p>
                    <p>Gist</p>
                </div>
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
        browserHistory.push('/');
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
