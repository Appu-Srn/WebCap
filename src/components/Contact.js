import React from 'react';


const Contact = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
        <div className="container">
            <h3 className="center text-secondary"><i className="fas fa-envelope-open"></i> Contact </h3>
            <br />
<p> <i className="fas fa-envelope-square"></i> appusrn@gmail.com</p>
<img style={{width:"500px", height:"500px"}} src = "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className = "img-rounded" alt="Coding pic"></img>
        </div>
    )
}
export default Contact