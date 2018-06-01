import React from 'react';
import {
    NavLink,
} from 'react-router-dom';

export default class ExchangeMenu extends React.Component {

    render(){

        return(
            <div className="exchange">
                <NavLink exact to="/exchange"><span className="text">KURS WALUT</span></NavLink>
            </div>
        )
    }
}


