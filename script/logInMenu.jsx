import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';


export default class LoginMenu extends React.Component {
    state = {
        name: '',
        log: false,
        removeInfo:""
    };





   responseGoogle = (response) => {
        // const result= response;
        // console.log("mam to", response.getName());
        let profile = response.getBasicProfile();
        let nameProfil = profile.getName();
        console.log(nameProfil);
        this.setState({
            name: nameProfil,
            log: true,
        })

    };



    render(){

        if(this.state.removeInfo === true) {
            return <div className="googleLog"><span className="text niceLog">miło nam, że jesteś zalogowany <i className="fas fa-thumbs-up"></i></span></div>
        }

        if(this.state.log === true) {

            // const hideDiv = $(".showMe");
            setTimeout( ()=>{
                this.setState({
                    removeInfo: true
                })
            }, 3000);

            return <div className="showMe">Witaj, <span style={{textDecoration:"underline"}}> {this.state.name}</span> zaplanuj z nami swoją podróż! <i className="fas fa-suitcase"></i><i className="fas fa-map-signs"></i><i className="fas fa-car"></i></div>;
        }





        return(
            <div className="googleLog">
            <GoogleLogin
                clientId="620178476236-6mbeam8nnao5mchqhkp77autsgim6acq.apps.googleusercontent.com"
                buttonText="Log In"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />

            </div>
        )
    }
}



