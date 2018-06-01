import React from 'react';
import LoginMenu from './logInMenu.jsx';
import PlannerMenu from './plannerMenu.jsx';
import ExchangeMenu from './exchangeMenu.jsx';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class Menu extends React.Component{
    render(){
        return (
            <div className="menu">
                <LoginMenu/>
                <PlannerMenu/>
                <ExchangeMenu/>
            </div>
        )

    }
}

