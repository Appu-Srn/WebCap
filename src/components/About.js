import React from 'react';


const About = () => {
    return (
        <div className="container">
            <h3 className="center text-secondary">About </h3>


            
<p>Webcap is a web application that allows you to capture images through your Web Camera and store them in a Firebase DB and view them later on.</p>
      
<div  id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div  className="carousel-inner ">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images.pexels.com/photos/1960183/pexels-photo-1960183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.pexels.com/photos/872512/pexels-photo-872512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.pexels.com/photos/1935826/pexels-photo-1935826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      
        </div>
    )
}
export default About;