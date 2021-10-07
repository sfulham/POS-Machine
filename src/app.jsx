import * as React from 'react';
import * as ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom"

const UserContext = React.createContext();

function render()
{
    ReactDOM.render(
        <UserContext.Provider>
            <Router>
                
            </Router>
        </UserContext.Provider>
    );
}

render();