import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default class ExchangeContainer extends React.Component {
    state = {
        name: 0,
        data: []
    };

    handleClick (){
        let selectedFrom = document.getElementById("currencyFrom");
        let selectedTo = document.getElementById("currencyTo");
        let valueFrom = selectedFrom.options[selectedFrom.selectedIndex].value;//pobranie zawartości z options
        let valueTo = selectedTo.options[selectedTo.selectedIndex].value;
        let amount = document.getElementById("amount").value;//pobranie zawartości inputa
        let resultElement = document.getElementById("result");
        let result = Number(amount) * (Number(valueFrom)/Number(valueTo));
        resultElement.innerHTML = result.toFixed(2);

    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value, //wartość formularza
        })
    };

    render(){

        if(this.state.data.length > 0) { //jezeli zawiera jakies dane //d to jest obiekt który zawiera wszystkie  elementy
            const symbol = this.state.data.map( (d,i) => <tr key={i}><td>{ d.code }</td><td>{d.currency}</td><td>{d.mid}</td></tr>);
            const selectValue = this.state.data.map( (d,i) => <option key={d.mid} value = {d.mid}>{d.currency}</option>);
            selectValue.unshift(<option key={"zloty"} value ={1}>PLN - polski złoty</option>);

            return (
                <div className="currencyContainer">

                    <div className="calculator">
                        <div className="calculatorTitle">KALKULATOR WALUTOWY</div>
                    <input id="amount" onChange={ this.handleChange } value={ this.state.name }/>
                        <button className="convertButton" onClick={this.handleClick}>Przelicz</button>
                        <div>PRZELICZ Z</div>
                        <select id="currencyFrom">
                            {selectValue}
                        </select>
                        <div>PRZELICZ NA</div>
                        <select id = "currencyTo">
                            {selectValue}
                        </select>
                        <div>WYNIK</div>
                        <div id="result">0</div>
                    </div>


                <div className="header" id="exchangeContainer">
                    <div >
                        <div className="tableName">Kurs walut w stosunku do PLN</div>
                        <table className="table">
                            <thead className="theadTable">
                            <tr style={{backgrounfColor: "#337ab7", color: "white"}}>
                                <th>SYMBOL</th>
                                <th>NAZWA WALUTY</th>
                                <th>KURS</th>
                            </tr>
                            </thead>
                            <tbody>
                                {symbol}
                            </tbody>
                        </table>
                    </div>
                </div>

                </div>
            );

        }

        return null;
    }

    componentDidMount() {

        fetch("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
            .then(resp => {
                if(resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Blad sieci!');
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    data: data[0].rates,
                })
            })
            .catch(err => console.log(err));
    }
}


