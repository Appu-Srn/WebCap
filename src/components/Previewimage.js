import { connect } from 'react-redux'
import React, { Component } from 'react';
// import { deletePost } from '../actions/postActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Previewimage extends Component {

 
render(){
    const { projects } = this.props;
    const {pics} = this.props;
    console.log(pics, "whatchya got")
    console.log(projects, "whatchya got projects")
    return(
        // {pics}
        <div>
        <h1 style={{ fontFamily:"Inconsolata"}}>All captured images</h1>
             <div className="post card bg-grey" key={pics}>

                        
                    


                    { projects && projects.map(project => {
        return (
            <div key={project.id}>
                <div className="container">
                <div className="row">
                <div className="col">
          <img style={{marginTop:"15px"}} src={project.picesa} alt={project.Name}/>
          <h6>Image Id is {project.id}</h6>
          </div>
          </div>
          </div>
        </div>
      
        )
      })}

                    
                  
                    </div>
        </div>
    )
}

}

const mapStateToProps = (state) => {

    return {
        pics: state.pics,
        projects: state.firestore.ordered.projects,
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         deletePost: (id) => { dispatch(deletePost(id))}
//     }

// }


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects', orderBy: ['createdAt', 'desc']}
    ])
  )(Previewimage)
