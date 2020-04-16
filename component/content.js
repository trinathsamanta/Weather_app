import React, { Component } from 'react'
import { connect } from 'react-redux';
import { report } from '../redux/action/action';
import Link from 'next/link'


 class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
            city: "",
            country: "",
            
        }
    }

    handleInputChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
      
        
        console.log(value);
       

        this.setState({
          [name]: value
        },
        );
      };
  
      handleSubmit = event =>{
        
      
      this.props.dispatch(report(this.state))
  //     if(this.state.city==""||this.state.country==""){
      
  //     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${Api_Key}`)
  // .then( r => r.json() )
  // .then( data => {
  //   console.log(data);
  // })
  //     }
  //     else{
  //      this.setState({
  //        error:true
  //      })
  //     }
      
      }
    
  
    

    render() {console.log(this.props)
        return (
            <div>
            <div className="container">
            <div className="card-deck mb-3 text-center">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <label htmlFor="staticCity" className="sr-only">City</label>
                  <input type="text"  className="form-control" name="city" id="staticCity" onChange={this.handleInputChange} value={this.state.city} placeholder="CITY"/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                  <label htmlFor="inputCountry" className="sr-only">Country</label>
                  <input type="Country" className="form-control" name="country" id="inputCountry" onChange={this.handleInputChange} value={this.state.country} placeholder="COUNTRY"/>
                </div>
                
                <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            
            <Link href="/Weather">
            <button className="btn btn-warning" onClick={this.handleSubmit}>Submit</button>
            </Link>  
          </div>
              </form>
                </div>
                
                </div>
                
                
              </div>
              </div>
            </div>
            </div>
        )
    }
}

const mapStatetoProps=(state)=>({
  state:state
})

export default connect(mapStatetoProps)(Content)