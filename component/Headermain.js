import React, { Component } from 'react'


export default class Headermain extends Component {
    render() {
        return (
            <div>            
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">WeatheR_aPP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample01">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/about">About us</a>
            </li>
            <li className="nav-item">
            <a className="nav-link " href="/contact">Contact us</a>
            </li>

            </ul>

            </div>
            </nav>
            </div>
        )
    }
}
