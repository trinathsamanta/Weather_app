import React, { Component } from 'react'
import {connect} from "react-redux"
import fetch from "isomorphic-unfetch"



class Weather extends Component {
    
    constructor(props) {
        super(props);
        this.state={

        city: undefined,
        country: undefined,
        icon: undefined,
        main: undefined,
        celsius: undefined,
        temp_max: null,
        temp_min: null,
        
        error: false
        }   
    }
    
    
 
    getWeather = async e => {
        e.preventDefault();
    
        const country = this.props.state.country
        const city = this.props.state.city;
        const Api_Key = '9a2bcdfef823e85ee7f29461a5d87bbd';
        console.log(country,city,122)
        if (country && city) {
          const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
          );
    
          const response = await api_call.json();
          this.setState({
            city: `${response.name}, ${response.sys.country}`,
            country: response.sys.country,
            main: response.weather[0].main,
            celsius: response.main.temp,
            temp_max: response.main.temp_max,
            temp_min: response.main.temp_min,
            
            error: false
          });
          console.log(response);
        } else {
          this.setState({
            error: true
          });
        }
      };
    render() {console.log(this.props.state)
        
        return (
            <div>
                <button onClick={this.getWeather}>tap to get weather</button>
                <div className="card-body">
               <h1 className="card-title pricing-card-title">{this.state.city} </h1>
               <ul className="list-unstyled mt-3 mb-4">
              <li>Status:{this.state.main}</li>
              <li>Temp:{this.state.celsius}</li>
              <li>temp-max:{this.state.temp_max}</li>
              <li>temp-min:{this.state.temp_min}</li>
            </ul>
            
          </div>
                
            </div>
        )
    }
}


  const mapStatetoProps = (state) =>({
      state:state.DataReducer
  })

export default connect(mapStatetoProps)(Weather)