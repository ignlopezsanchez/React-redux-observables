import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home2} from './features/Home2/Home2'
import {Weather} from "./features/Weather/Weather";


export default (props) => <Switch>
    <Route exact path="/githubSearch" component={Home2}/>
    <Route exact path="/weather" component={Weather}/>

</Switch>;