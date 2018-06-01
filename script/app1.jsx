import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner.jsx';
import Menu from './menu.jsx';
import ExchangeContainer from "./exchangeContainer.jsx";
import PlannerContainer from "./plannerContainer.jsx";
import Home from "./home.jsx";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';




document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {
        render(){
            return(
                <HashRouter>
                <div>
                    <NavLink exact to="/"><img src="images/logo4.png" className="logo"></img></NavLink>

                        <Route exact path="/" component={ Home}/>
                        <Route exact path="/planner" component={ PlannerContainer }/>
                        <Route exact path="/exchange" component={ ExchangeContainer }/>
                    <Menu/>
                </div>
        </HashRouter>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('.container')
    );
});
