import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './containers/main/main';
import EditPage from './containers/details/details';
// import './styles/main.scss'

const Root = () => (
    <Router>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/edit/:id" component={EditPage} />
        </div>
    </Router>
)

export default Root;