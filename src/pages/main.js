import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './home.js';
import Person from './person'


const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/person' component={Person} />
    </Switch>
)

export default Main;