import React from 'react';
import Banner from './banner.jsx';
import Menu from './menu.jsx';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default class Home extends React.Component{
    render(){
        return (
            <div>
                <Banner/>
            </div>
        )
    }
}
