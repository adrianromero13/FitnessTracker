import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Exercise from '../Exercise';

const App = props => (
    <Router>
        <Route exact path="/exercise" component={Exercise} />
    </Router>
);

export default App;
