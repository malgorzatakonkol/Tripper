import React from 'react';

export default class PlannerContainer extends React.Component {
    state = {
        start: "",
        end: ""

    };
    handleChange = (event) => {
        let elementID = event.target.getAttribute("id");
    if(elementID === "startInput"){
            this.setState({
                start: event.target.value, //wartość formularza
            })
        }
        else if(elementID === "endInput"){
        this.setState({
            end: event.target.value, //wartość formularza
        })
    }

    };



    render(){


        return(
            <div className="plannerMainContener">

            <div id="map"></div>

            <div className="header" id="plannerContainer">

                <div className="textPlan">WYZNACZ TRASĘ</div>

                <div className="fromPlace">
                    <div className="startPlace">Początek podróży</div>
                <input id = "startInput" onChange={ this.handleChange } value={ this.state.start }/>
            </div>

                <div className="toPlace">
                    <div className="finishPlace">Koniec podróży</div>
                <input id = "endInput" onChange={ this.handleChange } value={ this.state.end }/>
                </div>
                <button id="calculateRoute">Wyznacz trasę</button>

                <div className="readyInfo">
                    <div>Odległość:</div>
                    <div id="distanceInfo"></div>
                    <div>Czas podróży:</div>
                    <div id="timeinfo"></div>
                </div>

            </div>
            </div>
        )
    }


    initMaps = () => {

            let directionsService = new google.maps.DirectionsService;
            let directionsDisplay = new google.maps.DirectionsRenderer;
            let map = new google.maps.Map(document.getElementById('map'), {
                zoom: 5,
                center: {lat: 50.05, lng: 14.25}
            });
            directionsDisplay.setMap(map);
        let startIn = document.getElementById('startInput');
        let endIn = document.getElementById('endInput');
        let autocomplete = new google.maps.places.Autocomplete(startIn);
        let autocomplete1 = new google.maps.places.Autocomplete(endIn);
        autocomplete.bindTo('bounds', map);
        autocomplete1.bindTo('bounds', map);
             let onChangeHandler = function() {
                calculateAndDisplayRoute(directionsService, directionsDisplay);
            };
            document.getElementById('calculateRoute').addEventListener('click', onChangeHandler);



        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
            // var waypts = [];
            // waypts.push({
            //     location: "warszawa",
            //     stopover: true
            // });

            directionsService.route({
                origin: document.getElementById('startInput').value,
                destination: document.getElementById('endInput').value,
                // waypoints: waypts,
                // optimizeWaypoints: true,
                travelMode: 'DRIVING'
            }, function(response, status) {
                if (status === 'OK') {
                    console.log("response", response);
                    let distance = response.routes[0].legs[0].distance.text;
                    let duration = response.routes[0].legs[0].duration.text;
                    document.getElementById("distanceInfo").innerHTML = distance;
                    document.getElementById("timeinfo").innerHTML = duration;
                    console.log(distance, duration);
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }



    };



        componentDidMount () {
            // this.initMaps();
                this.id = setInterval(()=> { //sprawdzamy czy mapa sie załadowała
                    if(google && 'maps' in google){
                        clearInterval(this.id);
                        this.initMaps();
                    }
                },50);





        }
}