import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home2} from './features/Home2/Home2'


export default (props) => <Switch>
    <Route exact path="/home2" component={Home2}/>
</Switch>;