import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from 'redux';
import authReducer from "./auth-reducer";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";



let reducers = combineReducers({
    contentPage: contentReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
});


let store = createStore(reducers);

export default store; 


