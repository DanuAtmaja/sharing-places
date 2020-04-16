import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlaces';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlaces from  './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
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
                    <Route path="/places/:placeId">
                        <UpdatePlaces />
                    </Route>
                    <Route path="/auth">
                        <Auth />
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
