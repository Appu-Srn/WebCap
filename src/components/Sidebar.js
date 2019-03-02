import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';
import Webcam from "react-webcam";

import { connect } from 'react-redux'

class Sidebar extends Component {
    render(){


        console.log(this.props, "heyyya")
        const {pics} = this.props;

        const picsList = pics.length ? (
            pics.map(pic => {
                return (
                    <div className="post card bg-grey" key={pic}>
                        <img style={{height:"200px", width:"300px", marginTop:"10px"}} src={pic} alt="its a selfie"/>
                        
                    </div>
                )
            })
        ) : (
            <div className="center">No pics yet </div>
        )




        return(


           <div className="wrapper justify-content-end">

    <nav className="justify-content-end" id="sidebar">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon"><i className="fas fa-toggle-on"></i></span>
  </button>
  <h3 style={{color:"#A9A9A9"}}>Captured Images</h3>

  <div className="collapse navbar-collapse justify-content-end" id="sidebarSupportedContent">
        {/* <div className="sidebar-header">
            <h3>Captured Images</h3>
        </div> */}

     
        {picsList}








        </div>
    </nav>

</div>
        )
    }
}

export default Sidebar;