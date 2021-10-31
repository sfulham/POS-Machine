import * as React from 'react';
import * as ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom"

import Main from './components/main.jsx'


function render()
{
    ReactDOM.render(
        <>
        <Router> 
            <Switch>
                <Route path="/main_window">
                    <Main/>
                </Route>
            </Switch>
        </Router>
        </>
    , document.getElementById('root'));
}

render();