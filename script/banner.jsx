import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class Banner extends React.Component{
    render(){
        return (
            <div>
                    <NavLink exact to="/"><img src="images/logo4.png" className="logo"></img></NavLink>
                <div className="header banner"></div>
            </div>
        )
    }
}
