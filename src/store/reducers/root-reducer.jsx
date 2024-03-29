import authReducer from './auth-reducer';
import projectReducer from './project-reducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer, // Хранилище firebase
    firebase: firebaseReducer // Сервисы
})

export default rootReducer;