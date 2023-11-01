import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsFeed from './NewsFeed'

function App() {
    return (
        <Router>
                <Route exact path="/" component={NewsFeed} />
        </Router>
    );
}

export default App;