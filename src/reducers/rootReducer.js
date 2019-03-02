

import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const initState = {
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
          console.log('create project success');
          return state;
        case 'CREATE_PROJECT_ERROR':
          console.log('create project error');
          return state;
        default:
          return state;
      }
}


const rootReducer = combineReducers({

    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
  });


export default rootReducer;