import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlaces';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
    return (
        <Router>
            <MainNavigation/>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Users/>
                    </Route>
                    <Route path="/:userId/places">
                        <UserPlaces />
                    </Route>
                    <Route exact path="/places/new">
                        <NewPlace/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
