import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';


import App from './components/App';
import FrontPage from './components/FrontPage';
import Repo from './components/Repo';
import Reducer from './reducers/reducer';
import './css/main.css';

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>    
            <Route path='/' component={App}> 
                <IndexRoute component={FrontPage} />   
                <Route path='/repos/:user/:repo' component={Repo} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
