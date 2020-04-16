import React, { Component } from 'react'

export default class Headertemp extends Component {
    render() {
        return (
            <div>
            
            <h1 className="display-4">Hi,{this.props.name} </h1>
            </div>  
            
        )
    }
}
