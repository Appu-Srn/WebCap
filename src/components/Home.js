import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';
import Webcam from "react-webcam";
import { createProject } from './../reducers/actions/projectActions'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'



class Home extends Component {
    state = {
        
        pics: '',
        picesa: ''
    }


    setRef = webcam => {
        this.webcam = webcam;
      };
     
      capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        
        this.setState({
            // pics: imageSrc,
            pics: [...this.state.pics, imageSrc],
            picesa: imageSrc
        })
        this.props.createProject(this.state);
        console.log(this.state.pics)
        console.log(this.state.picesa, "picesa")
      };




    render(){
        console.log(this.props)

        const {pics} = this.props;
        console.log(pics)

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
          };



        return (
            <div className="container">



            <Sidebar pics={this.state.pics}/>
                <h2 style={{color:"#191970", fontFamily:"Srisakdi"}} className="center"><i>Web Camera Preview </i></h2>
                


                <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <br />

        <button style={{marginTop:"-20px", fontFamily:"Inconsolata"}} className="btn btn-success " onClick={this.capture}>Capture photo</button>
        <br />



            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        pics: state.pics
    }
}
const mapDispatchToProps = dispatch => {
    return {
      createProject: (project) => dispatch(createProject(project))
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);



