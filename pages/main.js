import React, { Component } from 'react'
import { connect } from "react-redux";

import Headertemp from '../component/Headertemp';
import Content from '../component/content';

class Main extends Component {
    render() { 
        return (
        <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <Headertemp name={this.props.state} />
        <p className="lead">choose the city and country</p>
        <Content/>
        </div>
        
        </div>
        )
    }
}
const mapStatetoProps = state => ({
    state:state.NameReducer
  })
  
  export default connect(mapStatetoProps)(Main)