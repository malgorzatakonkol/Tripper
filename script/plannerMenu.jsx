import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class PlannerMenu extends React.Component {
    render(){

        const style = {
            textDecoration: "none"
        };

        return(
            <div className="planner">
                <NavLink exact to="/planner" activeStyle={style}><span className="text">PLANOWANIE PODRÓżY</span></NavLink>
            </div>
        )
    }
}


